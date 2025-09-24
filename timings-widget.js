//----ПЕРЕМЕННЫЕ ГЕНЕРАЦИИ ТАЙМИНГОВ
let duration = 274535;   //в мс
//Минимальный интервал нот (1/16 нота при BPM = 260)
const step = 57.6923078;

let timings = [];
//Время в мс с которого начинается 
const startTiming = 1248;

//ГЕНЕРИРУЮ МАССИВ ДОПУСТИМЫХ ТАЙМИНГОВ
for (let i = startTiming; i <= duration; i += step) {
    timings.push(parseInt(i));
}

//---------ПЕРЕМЕННЫЕ HTML
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const audio = document.querySelector('.music');
audio.volume = 0.1;
const pop = document.querySelector('.pop');
pop.volume = 0.1;

const canvas = document.querySelector('.canvas-timings');
const ctx = canvas.getContext('2d');



//-------
let startTime = null;
let audioStartAt = 0;
const timeWindow = 3000;
//на сколько раньше нота должна появиться мс
const appearBeforeHitTime = 1500;
let speed = 0.7;
let playbackSpeed = 1


//----
let timingsTimeoutsIds = [];
//----
let notesTimeoutsIds = [];

let popTimeouts = [];

let isPause = false;
let pauseStartTime = 0;
let totalPauseDuration = 0;


const playedTimings = new Set();
let activeTimings = [];

const playedNotes = new Set();
let activeNotes = [];

// const playedNotes = new Set();

const noteSize = {
    width: 24,
    height: 40
}

function getAudioMs() {
    // аудио-время в мс, предсказанное по perf.now() и текущему playbackRate
    return audioStartAt + (performance.now() - startTime) * audio.playbackRate;
}

function audioDeltaToReal(delayAudioMs) {
    return delayAudioMs / audio.playbackRate;
}

function animateLoop() {
    const currentTime = getAudioMs();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(canvas.width / 2, 0, 2, canvas.height);

    // TIMINGS
    activeTimings.forEach((timingObj) => {
        if (!isPause) {
            const timeToHit = timingObj.timing - currentTime;
            const x = (canvas.width / 2) + timeToHit * speed;
            timingObj.x = x;
        }
        ctx.fillStyle = timingObj.color;
        ctx.fillRect(timingObj.x, canvas.height - timingObj.height, 2, timingObj.height);
    });
    // реально фильтруем
    activeTimings = activeTimings.filter(t => t.x > 0);

    // NOTES
    activeNotes.forEach(note => {
        if (!isPause) {
            const timeToHit = note.delay - currentTime; // без делений
            const x = (canvas.width / 2 - noteSize.width / 2) + timeToHit * speed;
            note.x = x;
        }
        ctx.fillStyle = '#0093c4';
        ctx.fillRect(note.x, canvas.height - noteSize.height, noteSize.width, noteSize.height);
    });
    activeNotes = activeNotes.filter(n => n.x > 0);

    requestAnimationFrame(animateLoop);
}


let sheduleId;

function sheduleTimingsInTimeWindow() {
    const currentTime = getAudioMs(); // аудио-время

    // NOTES
    notes.forEach(note => {
        const appearAudio = note.delay - appearBeforeHitTime; // момент ПОЯВЛЕНИЯ в аудио-мс
        const deltaAudio = appearAudio - currentTime;         // через сколько по аудио

        // если появится в ближайшие timeWindow аудио-мс
        if (deltaAudio >= 0 && deltaAudio <= timeWindow && !playedNotes.has(note.id)) {
            const realDelay = audioDeltaToReal(deltaAudio);

            playedNotes.add(note.id);

            const toId = setTimeout(() => {
                activeNotes.push(note);
            }, realDelay);
            notesTimeoutsIds.push(toId);

            // ЩЕЛЧОК в момент хита
            const deltaAudioToHit = note.delay - currentTime;
            const realDelayToHit = Math.max(0, audioDeltaToReal(deltaAudioToHit));
            const popId = setTimeout(() => { pop.currentTime = 0; pop.play(); }, realDelayToHit);
            popTimeouts.push(popId);
        }

        // догоняем пропущенные (во время паузы/перемотки), которые уже должны быть на экране
        if (deltaAudio < 0 && (appearAudio >= currentTime - appearBeforeHitTime) && !playedNotes.has(note.id)) {
            activeNotes.push(note);
            playedNotes.add(note.id);
        }
    });

    // TIMINGS
    timings.forEach((timing, index) => {
        const appearAudio = timing - appearBeforeHitTime;
        const deltaAudio = appearAudio - currentTime;

        if (deltaAudio > 0 && deltaAudio <= timeWindow && !playedTimings.has(timing)) {
            let color, height;
            if (index % 8 === 0) { color = 'red'; height = 60; }
            else if (index % 4 === 0) { color = '#7700ff'; height = 40; }
            else { color = '#fff'; height = 20; }

            const realDelay = audioDeltaToReal(deltaAudio);
            const toId = setTimeout(() => {
                activeTimings.push({ type: 'timing', timing, color, height });
                playedTimings.add(timing); // ← фикс: не timing.timing
            }, realDelay);
            timingsTimeoutsIds.push(toId);
        }

        // догоняем пропущенные шкалы
        if (deltaAudio <= 0 && (appearAudio >= currentTime - appearBeforeHitTime) && !playedTimings.has(timing)) {
            let color, height;
            if (index % 8 === 0) { color = 'red'; height = 60; }
            else if (index % 4 === 0) { color = '#7700ff'; height = 40; }
            else { color = '#fff'; height = 20; }
            activeTimings.push({ type: 'timing', timing, color, height });
            playedTimings.add(timing);
        }
    });

    sheduleId = setTimeout(sheduleTimingsInTimeWindow, 500); // частота проверок — реальное время
}


//-------ЗАПУСК
playBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
    startTime = performance.now();
    audioStartAt = audio.currentTime * 1000; // ← ЯВНО
    sheduleTimingsInTimeWindow();
    requestAnimationFrame(animateLoop);
});


window.addEventListener('keydown', event => {
    if (event.code == 'Escape') {
        isPause = !isPause;

        if (isPause) {
            audio.pause();
            pauseStartTime = performance.now();
            clearAllTimeouts();
        } else {
            //фиксирую время пребывания в паузе
            totalPauseDuration = performance.now() - pauseStartTime;
            //корректирую время, так как аудио в данном случае стартанет не сначала 
            startTime += totalPauseDuration;

            playedNotes.clear();
            playedTimings.clear();
            activeNotes = [];
            activeTimings = [];

            const currentTime = getAudioMs();

            //нужно поместить на игровое поле тайминги и ноты в пределах от текущего времени трека - 1500мс до текущего времени трека + 1500мс
            notes.forEach(note => {

                if (note.delay >= currentTime - appearBeforeHitTime && note.delay <= currentTime + appearBeforeHitTime) {
                    activeNotes.push(note);
                    playedNotes.add(note.id);

                    const deltaAudioToHit = note.delay - currentTime;
                    const realDelayToHit = Math.max(0, audioDeltaToReal(deltaAudioToHit));
                    const timeout = setTimeout(() => { pop.currentTime = 0; pop.play(); }, realDelayToHit);
                    popTimeouts.push(timeout);
                }
            });

            timings.forEach((timing, index) => {
                let color, height;

                if (index % 8 == 0) {
                    color = 'red';
                    height = 60;
                } else if (index % 4 == 0) {
                    color = '#7700ff';
                    height = 40;
                }
                else {
                    color = '#fff';
                    height = 20;
                }

                if (timing >= currentTime - appearBeforeHitTime && timing <= currentTime + appearBeforeHitTime) {
                    activeTimings.push({ type: 'timing', timing, color, height });
                    playedTimings.add(timing);
                }
            });


            sheduleTimingsInTimeWindow(); audio.play();
        }
    }
});

//узнаю сколько пикселей занимает 1 деление 
stopBtn.addEventListener('click', event => {
    console.log(activeTimings[11].x - activeTimings[10].x);
    console.log(activeTimings[12].x - activeTimings[11].x);

    console.log(activeTimings[13].x - activeTimings[12].x);
    console.log(activeTimings[14].x - activeTimings[13].x);

    console.log(activeTimings[15].x - activeTimings[14].x);
    console.log(activeTimings[16].x - activeTimings[15].x);
});



//---FUNCTION
function clearAllTimeouts() {
    timingsTimeoutsIds.forEach(timeout => clearTimeout(timeout));
    notesTimeoutsIds.forEach(note => clearTimeout(note));
    popTimeouts.forEach(pop => clearTimeout(pop));

    clearTimeout(sheduleId);

    timingsTimeoutsIds = [];
    notesTimeoutsIds = [];
    popTimeouts = [];
}


//----кнопки управления скоростью
window.addEventListener('click', event => {
    if (event.target.classList.contains('speed-btn')) {
        const id = event.target.id;
        updateSpeed(id);
    }
})

function updateSpeed(id) {
    audio.playbackRate = Number(id);
    pop.playbackRate = Number(id);
    // ребейз относительно новой скорости — зафиксировали "сейчас" как опору
    const nowAudioMs = audio.currentTime * 1000;
    startTime = performance.now();
    audioStartAt = nowAudioMs;


    clearAllTimeouts();
    playedNotes.clear();
    playedTimings.clear();
    activeNotes = [];
    activeTimings = [];


    sheduleTimingsInTimeWindow();
}

const audioProgress = document.querySelector('.audio-progress');
const audioTextProgress = document.querySelector('.audio-text-progress');

audio.addEventListener('timeupdate', event => {
    audioProgress.value = audio.currentTime / audio.duration * 1000;

    const totalMs = parseFloat(audio.currentTime.toFixed(3) * 1000);
    const totalSec = parseInt(audio.currentTime);
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    let zero = seconds < 10 ? 0 : '';
    audioTextProgress.innerHTML = `${minutes}:${zero}${seconds}:${totalMs % 1000}`
});

audioProgress.addEventListener('input', event => {
    audio.currentTime = audioProgress.value / 1000 * audio.duration;

    //отчищаю таймеры (отрисовку шкал таймингов, нот, и звучаний нот)
    clearAllTimeouts();

    //
    playedNotes.clear();
    playedTimings.clear();
    activeNotes.length = 0;
    activeTimings.length = 0;

    //обновляю стартовое время
    startTime = performance.now();
    audioStartAt = audio.currentTime * 1000;

    const currentTime = getAudioMs();

    //нужно поместить на игровое поле тайминги и ноты в пределах от текущего времени трека - 1500мс до текущего времени трека + 1500мс
    notes.forEach(note => {

        if (note.delay >= currentTime - appearBeforeHitTime && note.delay <= currentTime + appearBeforeHitTime) {
            activeNotes.push(note);
            playedNotes.add(note.id);

            const deltaAudioToHit = note.delay - currentTime;
            const realDelayToHit = Math.max(0, audioDeltaToReal(deltaAudioToHit));
            const timeout = setTimeout(() => { pop.currentTime = 0; pop.play(); }, realDelayToHit);
            popTimeouts.push(timeout);
        }
    });

    timings.forEach((timing, index) => {
        let color, height;

        if (index % 8 == 0) {
            color = 'red';
            height = 60;
        } else if (index % 4 == 0) {
            color = '#7700ff';
            height = 40;
        }
        else {
            color = '#fff';
            height = 20;
        }

        if (timing >= currentTime - appearBeforeHitTime && timing <= currentTime + appearBeforeHitTime) {
            activeTimings.push({ type: 'timing', timing, color, height });
            playedTimings.add(timing);
        }
    });


    //запускаю планировщик с обновленным startTime
    sheduleTimingsInTimeWindow();
});

//ф-ия которая вызывается по клику на canvas чтобы получить ноту для редактирования ей тайминга
function getNoteByClick(event) {
    const canvasCords = canvas.getBoundingClientRect();

    // console.log(canvasCords);
    // X относительно canvas
    const clickX = event.clientX - canvasCords.left;


    activeNotes.forEach(note => {
        if (clickX >= note.x && clickX <= note.x + noteSize.width) {
            console.log(note);
        }
    });
}

canvas.addEventListener('click', getNoteByClick);
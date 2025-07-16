//-------------------ПЕРЕМЕННЫЕ--------------
//------переменные тайминга карты
let duration = 274535;//в мс
//интервал минимальной доли при (bpm = 260)
const step = 57.6923078;//в мс
//массив допустимых таймингов согласно минимальной доли
const timings = [];
let notes = [
    {
        "delay": 3902,
        "column": 2,
        "id": "8"
    },
    {
        "delay": 4421,
        "column": 3,
        "id": "9"
    },
    {
        "delay": 4883,
        "column": 2,
        "id": "10"
    },
    {
        "delay": 5114,
        "column": 3,
        "id": "11"
    },
    {
        "delay": 5344,
        "column": 2,
        "id": "12"
    },
    {
        "delay": 5575,
        "column": 3,
        "id": "13"
    },
    {
        "delay": 7594,
        "column": 2,
        "id": "95"
    },
    {
        "delay": 8114,
        "column": 3,
        "id": "96"
    },
    {
        "delay": 8575,
        "column": 2,
        "id": "97"
    },
    {
        "delay": 8806,
        "column": 3,
        "id": "98"
    },
    {
        "delay": 9037,
        "column": 2,
        "id": "99"
    },
    {
        "delay": 9210,
        "column": 3,
        "id": "100"
    },
    {
        "delay": 9498,
        "column": 2,
        "id": "101"
    },
    {
        "delay": 9614,
        "column": 3,
        "id": "102"
    },
    {
        "delay": 9844,
        "column": 2,
        "id": "103"
    },
    {
        "delay": 9960,
        "column": 3,
        "id": "104"
    },
    {
        "delay": 10191,
        "column": 2,
        "id": "105"
    },
    {
        "delay": 10306,
        "column": 3,
        "id": "106"
    },
    {
        "delay": 10421,
        "column": 2,
        "id": "107"
    },
    {
        "delay": 10652,
        "column": 3,
        "id": "108"
    },
    {
        "delay": 10883,
        "column": 2,
        "id": "109"
    },
    {
        "delay": 11114,
        "column": 3,
        "id": "110"
    },
    {
        "delay": 11344,
        "column": 2,
        "id": "111"
    },
    {
        "delay": 11806,
        "column": 3,
        "id": "112"
    },
    {
        "delay": 12267,
        "column": 2,
        "id": "113"
    },
    {
        "delay": 12498,
        "column": 3,
        "id": "114"
    },
    {
        "delay": 12729,
        "column": 2,
        "id": "115"
    },
    {
        "delay": 12960,
        "column": 3,
        "id": "116"
    },
    {
        "delay": 13537,
        "column": 2,
        "id": "117"
    },
    {
        "delay": 13883,
        "column": 3,
        "id": "118"
    },
    {
        "delay": 14114,
        "column": 2,
        "id": "119"
    },
    {
        "delay": 14344,
        "column": 3,
        "id": "120"
    },
    {
        "delay": 14460,
        "column": 2,
        "id": "121"
    },
    {
        "delay": 14575,
        "column": 3,
        "id": "122"
    },
    {
        "delay": 14691,
        "column": 2,
        "id": "123"
    },
    {
        "delay": 14806,
        "column": 3,
        "id": "124"
    },
    {
        "delay": 14921,
        "column": 2,
        "id": "125"
    },
    {
        "delay": 15037,
        "column": 3,
        "id": "126"
    },
    {
        "delay": 15383,
        "column": 2,
        "id": "127"
    },
    {
        "delay": 15729,
        "column": 3,
        "id": "128"
    },
    {
        "delay": 15960,
        "column": 2,
        "id": "129"
    },
    {
        "delay": 16191,
        "column": 3,
        "id": "130"
    },
    {
        "delay": 16421,
        "column": 2,
        "id": "131"
    },
    {
        "delay": 16594,
        "column": 3,
        "id": "132"
    },
    {
        "delay": 16883,
        "column": 2,
        "id": "133"
    },
    {
        "delay": 16998,
        "column": 3,
        "id": "134"
    },
    {
        "delay": 17229,
        "column": 2,
        "id": "135"
    },
    {
        "delay": 17344,
        "column": 3,
        "id": "136"
    },
    {
        "delay": 17575,
        "column": 2,
        "id": "144"
    },
    {
        "delay": 17691,
        "column": 3,
        "id": "145"
    },
    {
        "delay": 17806,
        "column": 2,
        "id": "146"
    },
    {
        "delay": 17921,
        "column": 3,
        "id": "147"
    },
    {
        "delay": 18037,
        "column": 2,
        "id": "148"
    },
    {
        "delay": 18267,
        "column": 2,
        "id": "149"
    },
    {
        "delay": 18383,
        "column": 3,
        "id": "150"
    },
    {
        "delay": 18729,
        "column": 2,
        "id": "151"
    },
    {
        "delay": 19075,
        "column": 3,
        "id": "152"
    },
    {
        "delay": 19421,
        "column": 2,
        "id": "153"
    },
    {
        "delay": 19652,
        "column": 3,
        "id": "154"
    },
    {
        "delay": 19883,
        "column": 2,
        "id": "155"
    },
    {
        "delay": 20056,
        "column": 3,
        "id": "156"
    },
    {
        "delay": 20287,
        "column": 2,
        "id": "157"
    },
    {
        "delay": 20864,
        "column": 2,
        "id": "158"
    },
    {
        "delay": 21210,
        "column": 3,
        "id": "159"
    },
    {
        "delay": 21441,
        "column": 2,
        "id": "160"
    },
    {
        "delay": 21671,
        "column": 3,
        "id": "161"
    },
    {
        "delay": 21787,
        "column": 2,
        "id": "162"
    },
    {
        "delay": 21902,
        "column": 3,
        "id": "163"
    },
    {
        "delay": 22017,
        "column": 2,
        "id": "164"
    },
    {
        "delay": 22133,
        "column": 3,
        "id": "165"
    },
    {
        "delay": 22248,
        "column": 2,
        "id": "166"
    },
    {
        "delay": 22364,
        "column": 3,
        "id": "167"
    },
    {
        "delay": 22710,
        "column": 2,
        "id": "168"
    },
    {
        "delay": 22710,
        "column": 2,
        "id": "170"
    },
    {
        "delay": 23056,
        "column": 3,
        "id": "171"
    },
    {
        "delay": 23517,
        "column": 2,
        "id": "172"
    },
    {
        "delay": 23748,
        "column": 3,
        "id": "173"
    },
    {
        "delay": 23979,
        "column": 2,
        "id": "174"
    },
    {
        "delay": 24441,
        "column": 3,
        "id": "175"
    },
    {
        "delay": 24671,
        "column": 2,
        "id": "176"
    },
    {
        "delay": 24902,
        "column": 3,
        "id": "177"
    },
    {
        "delay": 25248,
        "column": 3,
        "id": "179"
    },
    {
        "delay": 25364,
        "column": 2,
        "id": "180"
    },
    {
        "delay": 25479,
        "column": 3,
        "id": "181"
    },
    {
        "delay": 25710,
        "column": 3,
        "id": "183"
    },
    {
        "delay": 25825,
        "column": 2,
        "id": "184"
    },
    {
        "delay": 25941,
        "column": 3,
        "id": "185"
    },
    {
        "delay": 26056,
        "column": 2,
        "id": "186"
    },
    {
        "id": 188,
        "column": 2,
        "delay": 25133
    },
    {
        "delay": 26056,
        "column": 2,
        "id": "189"
    },
    {
        "delay": 26460,
        "column": 3,
        "id": "190"
    },
    {
        "delay": 26806,
        "column": 2,
        "id": "191"
    },
    {
        "delay": 27267,
        "column": 3,
        "id": "192"
    },
    {
        "delay": 27498,
        "column": 2,
        "id": "193"
    },
    {
        "delay": 28191,
        "column": 2,
        "id": "227"
    },
    {
        "delay": 28537,
        "column": 3,
        "id": "228"
    },
    {
        "delay": 28825,
        "column": 2,
        "id": "229"
    },
    {
        "delay": 28941,
        "column": 3,
        "id": "230"
    },
    {
        "delay": 29056,
        "column": 2,
        "id": "231"
    },
    {
        "delay": 29171,
        "column": 3,
        "id": "232"
    },
    {
        "delay": 29287,
        "column": 2,
        "id": "233"
    },
    {
        "delay": 29402,
        "column": 3,
        "id": "234"
    },
    {
        "delay": 29517,
        "column": 2,
        "id": "235"
    },
    {
        "delay": 29633,
        "column": 3,
        "id": "236"
    },
    {
        "delay": 29806,
        "column": 2,
        "id": "237"
    },
    {
        "delay": 30152,
        "column": 3,
        "id": "238"
    },
    {
        "delay": 30498,
        "column": 2,
        "id": "239"
    },
    {
        "delay": 30902,
        "column": 3,
        "id": "240"
    },
    {
        "delay": 31133,
        "column": 2,
        "id": "241"
    },
    {
        "delay": 31421,
        "column": 3,
        "id": "242"
    },
    {
        "id": 247,
        "column": 2,
        "delay": 25594
    },
    {
        "delay": 31825,
        "column": 2,
        "id": "248"
    },
    {
        "delay": 32114,
        "column": 3,
        "id": "249"
    },
    {
        "delay": 32344,
        "column": 2,
        "id": "250"
    },
    {
        "delay": 32575,
        "column": 3,
        "id": "251"
    },
    {
        "delay": 32691,
        "column": 2,
        "id": "252"
    },
    {
        "delay": 32806,
        "column": 3,
        "id": "253"
    },
    {
        "delay": 32921,
        "column": 2,
        "id": "254"
    },
    {
        "delay": 33037,
        "column": 3,
        "id": "255"
    },
    {
        "delay": 33152,
        "column": 2,
        "id": "256"
    },
    {
        "delay": 33267,
        "column": 3,
        "id": "257"
    },
    {
        "delay": 33383,
        "column": 2,
        "id": "258"
    },
    {
        "delay": 33498,
        "column": 3,
        "id": "259"
    },
    {
        "delay": 34133,
        "column": 2,
        "id": "260"
    },
    {
        "delay": 34652,
        "column": 3,
        "id": "261"
    },
    {
        "delay": 34825,
        "column": 2,
        "id": "262"
    },
    {
        "delay": 35056,
        "column": 3,
        "id": "263"
    },
    {
        "delay": 35748,
        "column": 2,
        "id": "264"
    },
    {
        "delay": 36210,
        "column": 3,
        "id": "265"
    },
    {
        "delay": 36671,
        "column": 2,
        "id": "266"
    },
    {
        "delay": 37133,
        "column": 3,
        "id": "267"
    },
    {
        "delay": 37537,
        "column": 2,
        "id": "268"
    },
    {
        "delay": 39267,
        "column": 2,
        "id": "273"
    },
    {
        "delay": 39383,
        "column": 3,
        "id": "274"
    },
    {
        "delay": 39498,
        "column": 2,
        "id": "275"
    },
    {
        "delay": 39614,
        "column": 3,
        "id": "276"
    },
    {
        "delay": 39729,
        "column": 2,
        "id": "277"
    },
    {
        "delay": 39844,
        "column": 3,
        "id": "278"
    },
    {
        "delay": 39960,
        "column": 2,
        "id": "279"
    },
    {
        "delay": 40306,
        "column": 3,
        "id": "280"
    },
    {
        "delay": 40652,
        "column": 2,
        "id": "281"
    },
    {
        "delay": 40883,
        "column": 3,
        "id": "282"
    },
    {
        "delay": 41229,
        "column": 2,
        "id": "283"
    },
    {
        "delay": 41575,
        "column": 3,
        "id": "284"
    },
    {
        "delay": 41806,
        "column": 2,
        "id": "285"
    },
    {
        "delay": 42037,
        "column": 3,
        "id": "286"
    },
    {
        "delay": 42267,
        "column": 2,
        "id": "287"
    },
    {
        "delay": 42383,
        "column": 3,
        "id": "288"
    },
    {
        "delay": 42960,
        "column": 2,
        "id": "289"
    },
    {
        "delay": 43075,
        "column": 3,
        "id": "290"
    },
    {
        "delay": 43191,
        "column": 2,
        "id": "291"
    },
    {
        "delay": 43306,
        "column": 3,
        "id": "292"
    },
    {
        "delay": 43421,
        "column": 2,
        "id": "293"
    },
    {
        "delay": 43537,
        "column": 3,
        "id": "294"
    },
    {
        "delay": 43652,
        "column": 2,
        "id": "295"
    },
    {
        "delay": 43998,
        "column": 3,
        "id": "296"
    },
    {
        "delay": 44344,
        "column": 2,
        "id": "297"
    },
    {
        "delay": 44575,
        "column": 3,
        "id": "298"
    },
    {
        "delay": 44921,
        "column": 2,
        "id": "299"
    },
    {
        "delay": 45267,
        "column": 3,
        "id": "300"
    },
    {
        "delay": 45498,
        "column": 2,
        "id": "301"
    },
    {
        "delay": 45729,
        "column": 3,
        "id": "302"
    },
    {
        "delay": 45960,
        "column": 2,
        "id": "303"
    },
    {
        "delay": 46075,
        "column": 3,
        "id": "304"
    },
    {
        "id": 305,
        "column": 3,
        "delay": 33844
    },
    {
        "delay": 38344,
        "column": 2,
        "id": "306"
    },
    {
        "delay": 38575,
        "column": 3,
        "id": "307"
    },
    {
        "delay": 38691,
        "column": 2,
        "id": "308"
    },
    {
        "delay": 46594,
        "column": 2,
        "id": "309"
    },
    {
        "delay": 46710,
        "column": 3,
        "id": "310"
    },
    {
        "delay": 46825,
        "column": 2,
        "id": "311"
    },
    {
        "delay": 46941,
        "column": 3,
        "id": "312"
    },
    {
        "delay": 47056,
        "column": 2,
        "id": "313"
    },
    {
        "delay": 47171,
        "column": 3,
        "id": "314"
    },
    {
        "delay": 47344,
        "column": 2,
        "id": "315"
    },
    {
        "delay": 47633,
        "column": 3,
        "id": "316"
    },
    {
        "delay": 47979,
        "column": 2,
        "id": "317"
    },
    {
        "delay": 48267,
        "column": 3,
        "id": "318"
    },
    {
        "delay": 48902,
        "column": 2,
        "id": "319"
    },
    {
        "delay": 49594,
        "column": 3,
        "id": "320"
    },
    {
        "delay": 49883,
        "column": 2,
        "id": "321"
    },
    {
        "delay": 51960,
        "column": 2,
        "id": "327"
    },
    {
        "delay": 52191,
        "column": 3,
        "id": "328"
    },
    {
        "delay": 52421,
        "column": 2,
        "id": "329"
    },
    {
        "delay": 52652,
        "column": 3,
        "id": "330"
    },
    {
        "delay": 52883,
        "column": 2,
        "id": "331"
    },
    {
        "delay": 53114,
        "column": 3,
        "id": "332"
    },
    {
        "delay": 53344,
        "column": 2,
        "id": "333"
    },
    {
        "delay": 53575,
        "column": 3,
        "id": "334"
    },
    {
        "delay": 53806,
        "column": 2,
        "id": "335"
    },
    {
        "delay": 54037,
        "column": 3,
        "id": "336"
    },
    {
        "delay": 54267,
        "column": 2,
        "id": "337"
    },
    {
        "delay": 54498,
        "column": 3,
        "id": "338"
    },
    {
        "delay": 54729,
        "column": 2,
        "id": "339"
    },
    {
        "delay": 54960,
        "column": 3,
        "id": "340"
    },
    {
        "delay": 55191,
        "column": 2,
        "id": "341"
    },
    {
        "delay": 55421,
        "column": 3,
        "id": "342"
    },
    {
        "delay": 55652,
        "column": 2,
        "id": "343"
    },
    {
        "delay": 55767,
        "column": 3,
        "id": "344"
    },
    {
        "delay": 55883,
        "column": 2,
        "id": "345"
    },
    {
        "delay": 56114,
        "column": 3,
        "id": "346"
    },
    {
        "delay": 56344,
        "column": 2,
        "id": "347"
    },
    {
        "delay": 56575,
        "column": 3,
        "id": "348"
    },
    {
        "delay": 56806,
        "column": 2,
        "id": "349"
    },
    {
        "delay": 57037,
        "column": 3,
        "id": "350"
    },
    {
        "delay": 57267,
        "column": 2,
        "id": "351"
    },
    {
        "delay": 57498,
        "column": 3,
        "id": "352"
    },
    {
        "delay": 57729,
        "column": 2,
        "id": "353"
    },
    {
        "delay": 57960,
        "column": 3,
        "id": "354"
    },
    {
        "delay": 58191,
        "column": 2,
        "id": "355"
    },
    {
        "delay": 58421,
        "column": 3,
        "id": "356"
    },
    {
        "delay": 58652,
        "column": 2,
        "id": "357"
    },
    {
        "delay": 58883,
        "column": 3,
        "id": "358"
    },
    {
        "delay": 59114,
        "column": 2,
        "id": "359"
    },
    {
        "delay": 59344,
        "column": 2,
        "id": "360"
    },
    {
        "delay": 59460,
        "column": 3,
        "id": "361"
    },
    {
        "delay": 59575,
        "column": 2,
        "id": "362"
    },
    {
        "delay": 59806,
        "column": 3,
        "id": "363"
    },
    {
        "delay": 60037,
        "column": 2,
        "id": "364"
    },
    {
        "delay": 60267,
        "column": 3,
        "id": "365"
    },
    {
        "delay": 60498,
        "column": 2,
        "id": "366"
    },
    {
        "delay": 60729,
        "column": 3,
        "id": "367"
    },
    {
        "delay": 60960,
        "column": 2,
        "id": "368"
    },
    {
        "delay": 61191,
        "column": 3,
        "id": "369"
    },
    {
        "delay": 61421,
        "column": 2,
        "id": "370"
    },
    {
        "delay": 61652,
        "column": 3,
        "id": "371"
    },
    {
        "delay": 61883,
        "column": 2,
        "id": "372"
    },
    {
        "delay": 62114,
        "column": 3,
        "id": "373"
    },
    {
        "delay": 62344,
        "column": 2,
        "id": "374"
    },
    {
        "delay": 62575,
        "column": 3,
        "id": "375"
    },
    {
        "delay": 62806,
        "column": 2,
        "id": "376"
    },
    {
        "delay": 63037,
        "column": 2,
        "id": "377"
    },
    {
        "delay": 63152,
        "column": 3,
        "id": "378"
    },
    {
        "delay": 63267,
        "column": 2,
        "id": "379"
    },
    {
        "delay": 63498,
        "column": 3,
        "id": "380"
    },
    {
        "delay": 63729,
        "column": 2,
        "id": "381"
    },
    {
        "delay": 63960,
        "column": 3,
        "id": "382"
    },
    {
        "delay": 64191,
        "column": 2,
        "id": "383"
    },
    {
        "delay": 64421,
        "column": 3,
        "id": "384"
    },
    {
        "delay": 64652,
        "column": 2,
        "id": "385"
    },
    {
        "delay": 64883,
        "column": 3,
        "id": "386"
    },
    {
        "delay": 65114,
        "column": 2,
        "id": "387"
    },
    {
        "delay": 65344,
        "column": 3,
        "id": "388"
    },
    {
        "delay": 65575,
        "column": 2,
        "id": "389"
    },
    {
        "delay": 65806,
        "column": 3,
        "id": "390"
    },
    {
        "delay": 66037,
        "column": 2,
        "id": "391"
    },
    {
        "delay": 66267,
        "column": 3,
        "id": "392"
    },
    {
        "delay": 50287,
        "column": 2,
        "id": "394"
    },
    {
        "delay": 50517,
        "column": 3,
        "id": "395"
    },
    {
        "delay": 50748,
        "column": 2,
        "id": "396"
    },
    {
        "delay": 50979,
        "column": 3,
        "id": "397"
    },
    {
        "delay": 51441,
        "column": 2,
        "id": "398"
    },
    {
        "delay": 66729,
        "column": 2,
        "id": "399"
    },
    {
        "delay": 67479,
        "column": 3,
        "id": "400"
    },
    {
        "delay": 68114,
        "column": 2,
        "id": "401"
    },
    {
        "delay": 70421,
        "column": 2,
        "id": "402"
    },
    {
        "delay": 70652,
        "column": 3,
        "id": "403"
    },
    {
        "delay": 70883,
        "column": 2,
        "id": "404"
    },
    {
        "delay": 71114,
        "column": 3,
        "id": "405"
    },
    {
        "delay": 71806,
        "column": 2,
        "id": "406"
    },
    {
        "delay": 72037,
        "column": 3,
        "id": "407"
    },
    {
        "delay": 72267,
        "column": 2,
        "id": "408"
    },
    {
        "delay": 72498,
        "column": 3,
        "id": "409"
    },
    {
        "delay": 73133,
        "column": 2,
        "id": "457"
    },
    {
        "delay": 73594,
        "column": 3,
        "id": "458"
    },
    {
        "delay": 73998,
        "column": 2,
        "id": "471"
    },
    {
        "delay": 74402,
        "column": 2,
        "id": "472"
    },
    {
        "delay": 74748,
        "column": 2,
        "id": "473"
    },
    {
        "delay": 74864,
        "column": 3,
        "id": "474"
    },
    {
        "delay": 74979,
        "column": 2,
        "id": "475"
    },
    {
        "delay": 75325,
        "column": 2,
        "id": "476"
    },
    {
        "delay": 75671,
        "column": 2,
        "id": "477"
    },
    {
        "delay": 76306,
        "column": 2,
        "id": "515"
    },
    {
        "delay": 76421,
        "column": 3,
        "id": "516"
    },
    {
        "delay": 76537,
        "column": 2,
        "id": "517"
    },
    {
        "delay": 76652,
        "column": 3,
        "id": "518"
    },
    {
        "delay": 76767,
        "column": 2,
        "id": "519"
    },
    {
        "delay": 76883,
        "column": 3,
        "id": "520"
    },
    {
        "delay": 76998,
        "column": 2,
        "id": "521"
    },
    {
        "delay": 77114,
        "column": 3,
        "id": "522"
    },
    {
        "delay": 77229,
        "column": 2,
        "id": "523"
    },
    {
        "delay": 77344,
        "column": 3,
        "id": "524"
    },
    {
        "delay": 77460,
        "column": 2,
        "id": "525"
    },
    {
        "delay": 77575,
        "column": 3,
        "id": "526"
    },
    {
        "delay": 77691,
        "column": 2,
        "id": "527"
    },
    {
        "delay": 77806,
        "column": 3,
        "id": "528"
    },
    {
        "id": 529,
        "column": 3,
        "delay": 76191
    },
    {
        "id": 530,
        "column": 2,
        "delay": 76075
    },
    {
        "delay": 78094,
        "column": 2,
        "id": "531"
    },
    {
        "delay": 78441,
        "column": 2,
        "id": "532"
    },
    {
        "delay": 78556,
        "column": 3,
        "id": "533"
    },
    {
        "delay": 78671,
        "column": 2,
        "id": "534"
    },
    {
        "delay": 80114,
        "column": 2,
        "id": "573"
    },
    {
        "delay": 80575,
        "column": 3,
        "id": "574"
    },
    {
        "delay": 81037,
        "column": 2,
        "id": "575"
    },
    {
        "delay": 81498,
        "column": 3,
        "id": "576"
    },
    {
        "delay": 81902,
        "column": 2,
        "id": "577"
    },
    {
        "delay": 82191,
        "column": 3,
        "id": "578"
    },
    {
        "delay": 82306,
        "column": 2,
        "id": "579"
    },
    {
        "delay": 82421,
        "column": 3,
        "id": "580"
    },
    {
        "delay": 82710,
        "column": 2,
        "id": "581"
    },
    {
        "delay": 83114,
        "column": 2,
        "id": "582"
    },
    {
        "delay": 83748,
        "column": 2,
        "id": "583"
    },
    {
        "delay": 83864,
        "column": 3,
        "id": "584"
    },
    {
        "delay": 83979,
        "column": 2,
        "id": "585"
    },
    {
        "delay": 84094,
        "column": 3,
        "id": "586"
    },
    {
        "delay": 84210,
        "column": 2,
        "id": "587"
    },
    {
        "delay": 84325,
        "column": 3,
        "id": "588"
    },
    {
        "delay": 84441,
        "column": 2,
        "id": "589"
    },
    {
        "delay": 84556,
        "column": 3,
        "id": "590"
    },
    {
        "delay": 84671,
        "column": 2,
        "id": "591"
    },
    {
        "delay": 84787,
        "column": 3,
        "id": "592"
    },
    {
        "delay": 84902,
        "column": 2,
        "id": "593"
    },
    {
        "delay": 85017,
        "column": 3,
        "id": "594"
    },
    {
        "delay": 85133,
        "column": 2,
        "id": "595"
    },
    {
        "id": 596,
        "column": 3,
        "delay": 83633
    },
    {
        "id": 597,
        "column": 2,
        "delay": 83517
    },
    {
        "delay": 85479,
        "column": 2,
        "id": "599"
    },
    {
        "delay": 85594,
        "column": 3,
        "id": "600"
    },
    {
        "delay": 85825,
        "column": 2,
        "id": "601"
    },
    {
        "delay": 85941,
        "column": 3,
        "id": "602"
    },
    {
        "delay": 86056,
        "column": 2,
        "id": "603"
    },
    {
        "delay": 86287,
        "column": 2,
        "id": "604"
    },
    {
        "delay": 86517,
        "column": 3,
        "id": "605"
    },
    {
        "delay": 86748,
        "column": 2,
        "id": "606"
    },
    {
        "delay": 86979,
        "column": 2,
        "id": "607"
    },
    {
        "delay": 87325,
        "column": 2,
        "id": "608"
    },
    {
        "delay": 87441,
        "column": 3,
        "id": "609"
    },
    {
        "delay": 87671,
        "column": 2,
        "id": "610"
    },
    {
        "delay": 87787,
        "column": 3,
        "id": "611"
    },
    {
        "delay": 87902,
        "column": 2,
        "id": "612"
    },
    {
        "delay": 88133,
        "column": 2,
        "id": "613"
    },
    {
        "delay": 88364,
        "column": 3,
        "id": "614"
    },
    {
        "delay": 88594,
        "column": 2,
        "id": "615"
    },
    {
        "delay": 88825,
        "column": 3,
        "id": "616"
    },
    {
        "delay": 89517,
        "column": 2,
        "id": "695"
    },
    {
        "delay": 91364,
        "column": 2,
        "id": "699"
    },
    {
        "delay": 91594,
        "column": 3,
        "id": "700"
    },
    {
        "delay": 91825,
        "column": 2,
        "id": "701"
    },
    {
        "delay": 92056,
        "column": 3,
        "id": "702"
    },
    {
        "delay": 92287,
        "column": 2,
        "id": "703"
    },
    {
        "delay": 92517,
        "column": 3,
        "id": "704"
    },
    {
        "delay": 92864,
        "column": 2,
        "id": "705"
    },
    {
        "delay": 93210,
        "column": 3,
        "id": "706"
    },
    {
        "delay": 89229,
        "column": 3,
        "id": "711"
    },
    {
        "delay": 89517,
        "column": 2,
        "id": "712"
    },
    {
        "delay": 90267,
        "column": 2,
        "id": "713"
    },
    {
        "delay": 90614,
        "column": 3,
        "id": "714"
    },
    {
        "delay": 90960,
        "column": 2,
        "id": "715"
    },
    {
        "delay": 93902,
        "column": 2,
        "id": "807"
    },
    {
        "delay": 94248,
        "column": 3,
        "id": "808"
    },
    {
        "delay": 94652,
        "column": 2,
        "id": "809"
    },
    {
        "delay": 95344,
        "column": 2,
        "id": "810"
    },
    {
        "delay": 95460,
        "column": 3,
        "id": "811"
    },
    {
        "delay": 95575,
        "column": 2,
        "id": "812"
    },
    {
        "delay": 95691,
        "column": 3,
        "id": "813"
    },
    {
        "delay": 95806,
        "column": 2,
        "id": "814"
    },
    {
        "delay": 95921,
        "column": 3,
        "id": "815"
    },
    {
        "delay": 96037,
        "column": 2,
        "id": "816"
    },
    {
        "delay": 96152,
        "column": 3,
        "id": "817"
    },
    {
        "delay": 96267,
        "column": 2,
        "id": "818"
    },
    {
        "delay": 96556,
        "column": 2,
        "id": "822"
    },
    {
        "delay": 96671,
        "column": 3,
        "id": "823"
    },
    {
        "delay": 96902,
        "column": 2,
        "id": "824"
    },
    {
        "delay": 97133,
        "column": 3,
        "id": "825"
    },
    {
        "delay": 97364,
        "column": 2,
        "id": "826"
    },
    {
        "delay": 97594,
        "column": 3,
        "id": "827"
    },
    {
        "delay": 97883,
        "column": 2,
        "id": "828"
    },
    {
        "delay": 98114,
        "column": 3,
        "id": "829"
    },
    {
        "delay": 98460,
        "column": 2,
        "id": "830"
    },
    {
        "delay": 98575,
        "column": 3,
        "id": "831"
    },
    {
        "delay": 98806,
        "column": 2,
        "id": "832"
    },
    {
        "delay": 98921,
        "column": 3,
        "id": "833"
    },
    {
        "delay": 99037,
        "column": 2,
        "id": "834"
    },
    {
        "delay": 99267,
        "column": 3,
        "id": "835"
    },
    {
        "delay": 99498,
        "column": 2,
        "id": "836"
    },
    {
        "delay": 99671,
        "column": 3,
        "id": "837"
    },
    {
        "delay": 99902,
        "column": 2,
        "id": "838"
    },
    {
        "delay": 100306,
        "column": 2,
        "id": "839"
    },
    {
        "delay": 100421,
        "column": 3,
        "id": "840"
    },
    {
        "delay": 100652,
        "column": 2,
        "id": "841"
    },
    {
        "delay": 100767,
        "column": 3,
        "id": "842"
    },
    {
        "delay": 100883,
        "column": 2,
        "id": "843"
    },
    {
        "delay": 101114,
        "column": 3,
        "id": "844"
    },
    {
        "delay": 101344,
        "column": 2,
        "id": "845"
    },
    {
        "delay": 101575,
        "column": 3,
        "id": "846"
    },
    {
        "delay": 101806,
        "column": 2,
        "id": "847"
    },
    {
        "delay": 102152,
        "column": 2,
        "id": "848"
    },
    {
        "delay": 102267,
        "column": 3,
        "id": "849"
    },
    {
        "delay": 102498,
        "column": 2,
        "id": "850"
    },
    {
        "delay": 102614,
        "column": 3,
        "id": "851"
    },
    {
        "delay": 102729,
        "column": 2,
        "id": "852"
    },
    {
        "delay": 102844,
        "column": 3,
        "id": "853"
    },
    {
        "delay": 102960,
        "column": 2,
        "id": "854"
    },
    {
        "delay": 103075,
        "column": 3,
        "id": "855"
    },
    {
        "delay": 103191,
        "column": 2,
        "id": "856"
    },
    {
        "delay": 103306,
        "column": 3,
        "id": "857"
    },
    {
        "delay": 103421,
        "column": 2,
        "id": "858"
    },
    {
        "delay": 103537,
        "column": 3,
        "id": "859"
    },
    {
        "delay": 103652,
        "column": 2,
        "id": "860"
    }
]

const startTiming = 1191;
const timingsStatic = [];
let isPaused = false;

//генерирую допустимые тайминги согласно минимальной доли (step)
for (let i = startTiming; i < duration; i += step) {
  timings.push(parseInt(i));
  timingsStatic.push(parseInt(i));
}

//ф-ия которая принимает текущий момент в музыке в мс, и корректирует тайминг согласно bpm
const acceptableTimingByBpm = (ms) => {
  let left = 0;
  let right = timings.length - 1;

  // Бинарный поиск ближайшего элемента
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (timings[mid] === ms) {
      return timings[mid]; // Точное совпадение
    } else if (timings[mid] < ms) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Если вышел за границы массива
  if (right < 0) return timings[left];
  if (left >= timings.length) return timings[right];

  // Сравниваем разницу с соседями
  const diffLeft = ms - timings[right];
  const diffRight = timings[left] - ms;

  if (diffLeft <= diffRight) {
    return timings[right];
  } else {
    return timings[left];
  }
}

//для хранения id запланированных таймеров
const timersIds = [];

//массив сохраненных нот
const savedNote = [];


const pop = document.querySelector('.audio-pop');
pop.volume = 0.1;

const music = document.querySelector('.music');
music.volume = 0.1;


//music controls
const progressBar = document.querySelector('.input-music');
const playBtn = document.querySelector('#playButton');
const pauseBtn = document.querySelector('#pauseButton');
const stopBtn = document.querySelector('#stopButton');
//кнопка для запуска теста сгенерированных нот
const playTestNotes = document.querySelector('.test-btn');
//кнопка сохранение нот
const saveNotesBtn = document.querySelector('.save-notes');
const deleteBtn = document.querySelector('.delete-notes-from-current');

deleteBtn.addEventListener('click', event => {
  //извлекаю текущий тайм трека
  const time = parseFloat(music.currentTime.toFixed(3)) * 1000;
  notes = notes.filter(note => note.delay < time);
});

//по клику сохраняю ноты 
saveNotesBtn.addEventListener('click', (event) => {
  notes.forEach(note => {
    savedNote.push(note);
  });

  notes = [];
  console.log(savedNote);
});

pauseBtn.addEventListener('click', () => {
  //ставим музыку на паузу и отчищаем таймеры появления нот
  music.pause();
  clearAllTimeouts();
});

stopBtn.addEventListener('click', () => {
  music.pause();
  music.currentTime = 0;
  clearAllTimeouts();
});

//обновляю текущий прогресс трека
const currentTimeHTML = document.querySelector('.music-current-time');
music.addEventListener('timeupdate', () => {
  const progress = (music.currentTime / music.duration) * 1000;
  progressBar.value = progress;
  currentTimeHTML.innerHTML = parseFloat(music.currentTime.toFixed(3));
});

progressBar.addEventListener('input', () => {
  //отчищаю игровое поле от прошлых нот
  notesTrack.querySelectorAll('div').forEach(item => item.remove());
  let time = (progressBar.value / 1000) * music.duration;
  music.currentTime = time;

  //отчистили запланированные таймеры
  clearAllTimeouts();
  time = time.toFixed(3) * 1000;

  //Отфильтровал и отредактикоровал тайминги запланированных нот
  let newNotes = notes.filter(note => note.delay > time).map(note => ({ delay: note.delay - time, column: note.column, id: note.id }))

  newNotes.forEach(note => {
    scheduleOfTimers(note.delay * (1 / music.playbackRate), () => {
      popSound();
      createTestNote(note);
    });
  });

  music.play();
  isPaused = false;
});

//кнопки управляющие скоростью воспроизведения
const btnsSpeed = document.querySelectorAll('.btn-speed');

btnsSpeed.forEach(btn => {
  btn.onclick = (event) => {
    if (document.querySelector('.btn-speed-active')) {
      document.querySelector('.btn-speed-active').classList.remove('btn-speed-active');
    }
    event.target.classList.add('btn-speed-active');
    const speed = parseFloat(event.target.id);
    music.playbackRate = speed;

    //после того как изменили скорость воспроизведения, корректируем тайминги запланированных нот
    if (!music.paused) {
      //отчищаю прошлые таймеры
      clearAllTimeouts();
      //извлекаю текущий тайм трека
      const time = parseFloat(music.currentTime.toFixed(3)) * 1000;
      //Отфильтровал и отредактикоровал тайминги запланированных нот
      let newNotes = notes.filter(note => note.delay > time).map(note => ({ delay: note.delay - time, column: note.column, id: note.id, y: 0 }))

      newNotes.forEach(note => {
        scheduleOfTimers(note.delay * (1 / music.playbackRate), () => {
          popSound();
          createTestNote(note);
        });
      });
    }
  }
});


//обработчик тестирования нот
playTestNotes.addEventListener('click', event => {
  clearAllTimeouts();
  music.currentTime = 0;
  music.play();
  console.log(notes);
  //цикл с генерацией нот (щелчков)
  notes.forEach(note => {
    scheduleOfTimers(note.delay * (1 / music.playbackRate), () => {
      createTestNote(note);
      popSound();
    });
  });
});

stopBtn.addEventListener('click', () => {
  clearAllTimeouts();
  music.pause();
});

//контейнер для отрисовки сгенерированных нот
const notesTrack = document.querySelector('.show-current-notes__inner');
const activeNotes = [];

//функция отрисовки созданной ноты
function createTestNote({ id, column }) {
  const note = document.createElement('div');
  note.classList.add('test-note-new');
  note.style.top = `${80 * column - 80}px`;
  note.style.right = '0px';
  note.id = id;

  notesTrack.appendChild(note);
  activeNotes.push(note);
}

function animate() {
    //каждый фрейм пробегаюсь по активным нотам
    activeNotes.forEach(noteHtmlObj => {
        const currentRight = parseFloat(noteHtmlObj.style.right);
        //если вопсроизведение не на паузе, анимирую ноты
        if (!isPaused) {
            noteHtmlObj.style.right = `${currentRight + 7}px`;
        }
    });

    //после изменения координат всех активных нот, пробегаюсь снвоа чтобы удалить вышедших за границу
    activeNotes.filter((noteHtmlObj, index) => {
        const currentRight = parseFloat(noteHtmlObj.style.right)
        if (currentRight < 1200) return noteHtmlObj;

        noteHtmlObj.remove();
    })

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);


//перенная генерирующая id ()
let nextId = 399;

//обработчик начала генерации нот
playBtn.addEventListener('click', event => {
  isPaused = false;

  music.play();

  if (notes.length > 0) {
    clearAllTimeouts();
    //извлекаю текещий тайм трека
    const time = parseFloat(music.currentTime.toFixed(3)) * 1000;
    //Отфильтровал и отредактикоровал тайминги запланированных нот
    let newNotes = notes.filter(note => note.delay > time).map(note => ({ delay: note.delay - time, column: note.column, id: note.id }))

    newNotes.forEach(note => {
      scheduleOfTimers(note.delay * (1 / music.playbackRate), () => {
        popSound();
        createTestNote(note);
      });
    });
  }

  const keys = {
    'KeyS': false,
    'KeyD': false,
    'KeyF': false,
    'KeyJ': false,
    'KeyK': false,
    'KeyL': false,
  };

  window.onkeydown = event => {
    if (event.code == 'KeyS') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 1,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
        console.log(nextId)
      }
    }
    if (event.code == 'KeyD') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 2,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
      }
    }
    if (event.code == 'KeyF') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 3,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
      }
    }
    if (event.code == 'KeyJ') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 4,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
      }
    }
    if (event.code == 'KeyK') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 5,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
      }

    }
    if (event.code == 'KeyL') {
      if (!keys[event.code]) {
        keys[event.code] = true;
        let noteTiming = parseFloat(music.currentTime.toFixed(3)) * 1000;
        noteTiming = acceptableTimingByBpm(noteTiming);
        const noteObj = {
          delay: noteTiming,
          column: 6,
          id: `${nextId}`
        };
        notes.push(noteObj);
        createTestNote(noteObj);
        nextId++;
      }

    }
    if (event.code == 'Escape') {
      isPaused = !isPaused;
      if (isPaused) {
        //ставим музыку на паузу и отчищаем таймеры появления нот
        music.pause();
        clearAllTimeouts();
      } else {
        //извлекаю текещий тайм трека
        const time = parseFloat(music.currentTime.toFixed(3)) * 1000;
        //Отфильтровал и отредактикоровал тайминги запланированных нот
        let newNotes = notes.filter(note => note.delay > time).map(note => ({ delay: note.delay - time, column: note.column, id: note.id }))

        newNotes.forEach(note => {
          scheduleOfTimers(note.delay * (1 / music.playbackRate), () => {
            popSound();
            createTestNote(note);
          });
        });

        music.play();
      }
    }

    if (event.code == 'ArrowLeft') {
      music.pause();
      //извлекаю текещий тайм трека
      let time = parseFloat(music.currentTime.toFixed(3)) * 1000;
      time -= step;
      music.currentTime = acceptableTimingByBpm(time) / 1000;
    }

    if (event.code == 'ArrowRight') {
      music.pause();
      //извлекаю текещий тайм трека
      let time = parseFloat(music.currentTime.toFixed(3)) * 1000;
      time += step;
      music.currentTime = acceptableTimingByBpm(time) / 1000;
    }
  };

  window.onkeyup = event => {
    keys[event.code] = false;
  }
});


const editNoteWrapper = document.querySelector('.note-settings-wrapper');

function editNoteComponent(obj) {
  return `
        <div class="note-settings" data-note="${obj.id}">
        <div class="note-settings__row">
            id : ${obj.id}

          </div>
          <div class="note-settings__row">
            Тайминг
            <input class="note-settings__row-time" type="number" value="${obj.delay}" readonly>
            <div class="counter">
              <button class="timing-increment">+</button>
              <button class="timing-decrement">-</button>
            </div>
          </div>
          <div class="note-settings__row">
            Колонка
            <input class="note-settings__column" type="number" value="${obj.column}" min="1" max="6">
          </div>
          <div class="note-settings__btns">
            <button class="note-settings__btn-remove">Удалить</button>
            <button class="note-settings__btn-save">Сохранить</button>
            <button class="note-settings__btn-clone">Клонировать</button>
          </div>
        </div>
  `;
}

window.addEventListener('click', event => {
  //кликнули на сгенерированную ноту, отобразили инфу в боковой панели
  if (event.target.classList.contains('test-note-new')) {
    const id = event.target.id;
    const findedNote = notes.find(note => note.id == id);
    const delay = findedNote.delay;
    const column = findedNote.column;
    editNoteWrapper.innerHTML = editNoteComponent({ id, delay, column });

    //после того как отобразил в панеле информацию о ноте, вешаю обработчик 
    //который вызвается при изменении инпута (колонки)
    editNoteWrapper.querySelector('.note-settings__column').addEventListener('input', event => {
      //нахожу родителя и извлекаю id редактируемой ноты
      const parent = event.target.closest('.note-settings');
      const id = parent.dataset.note;
      const index = notes.findIndex(note => note.id == id);
      notes[index].column = Number(event.target.value);

      const currentNote = document.getElementById(`${id}`);
      currentNote.style.top = 80 * Number(event.target.value) - 80 + 'px';
    });
  }
  //кликнули на кнопку удаления ноты
  if (event.target.classList.contains('note-settings__btn-remove')) {
    const id = event.target.closest('.note-settings').dataset.note;
    notesTrack.querySelector(`[id="${id}"]`).remove();
    editNoteWrapper.innerHTML = '';

    const findedIndex = notes.findIndex(note => note.id == id);
    notes.splice(findedIndex, 1);
  }
  //кликнули на сохранить
  if (event.target.classList.contains('note-settings__btn-save')) {
    const parent = event.target.closest('.note-settings');
    const id = parent.dataset.note;
    const delay = parent.querySelector('.note-settings__row-time').value;
    const column = parent.querySelector('.note-settings__column').value;
    const index = notes.findIndex(note => note.id == id);
    notes[index] = { id, delay, column };

    const currentNote = document.getElementById(`${id}`);
    currentNote.style.top = 80 * column - 80 + 'px';
  }
  //кликнули на клонировать
  if (event.target.classList.contains('note-settings__btn-clone')) {
    const parent = event.target.closest('.note-settings');
    const id = parent.dataset.note;
    const delay = parent.querySelector('.note-settings__row-time').value;

    //клонируемая нота
    const currentNote = notesTrack.querySelector(`[id="${id}"]`);
    console.log("Позиция по Y " + currentNote.style.top);
    console.log("Позиция по X " + currentNote.style.right);

    const newNoteColumn = parseInt(window.prompt('Введите на какую колонку'));

    //проверяю есть ли в массиве нот, нота с таким же таймингом и колонкой
    if (notes.find(note => note.delay == Number(delay) && note.column == newNoteColumn)) {
      alert('Нота с таким таймингом и колонкой уже есть, необходимо изменитить номер колонки');
    } else {
      //если такой ноты не оказалось, значит спокойно клонируем ноту на другую колонку
      //создаю ноту клона
      createTestNote({ id: nextId, column: newNoteColumn });
      notes.push({ id: nextId, column: newNoteColumn, delay });
      notesTrack.querySelector(`[id="${nextId}"]`).style.right = currentNote.style.right;
      nextId++;
    }
  }
  //кликнули на + (увеличить тайминг ноты)
  if (event.target.classList.contains('timing-increment')) {
    const parent = event.target.closest('.note-settings');
    const id = parent.dataset.note;
    const delayHtml = parent.querySelector('.note-settings__row-time');
    const delayValue = delayHtml.value;
    const column = parent.querySelector('.note-settings__column').value;

    const index = timingsStatic.findIndex(timing => timing == Number(delayValue));
    const nextTiming = timingsStatic[index + 1];
    delayHtml.value = nextTiming;
    const indexOfNote = notes.findIndex(note => note.id == id);
    notes[indexOfNote].delay = nextTiming;
    const currentNote = document.getElementById(`${id}`);
    currentNote.style.right = parseInt(currentNote.style.right) - 35 + 'px';
  }

  //кликнули на - (уменьшить тайминг ноты)
  if (event.target.classList.contains('timing-decrement')) {
    const parent = event.target.closest('.note-settings');
    const id = parent.dataset.note;
    const delayHtml = parent.querySelector('.note-settings__row-time');
    const delayValue = delayHtml.value;
    const column = parent.querySelector('.note-settings__column').value;

    const index = timingsStatic.findIndex(timing => timing == Number(delayValue));
    const nextTiming = timingsStatic[index - 1];
    delayHtml.value = nextTiming;
    const indexOfNote = notes.findIndex(note => note.id == id);
    notes[indexOfNote].delay = nextTiming;
    const currentNote = document.getElementById(`${id}`);
    currentNote.style.right = parseInt(currentNote.style.right) + 35 + 'px';
  }
});

// console.log(timings);


//--------------------ФУНКЦИИ--------------------
function popSound() {
  pop.currentTime = 0;
  pop.play();
}

//функция которая вызывает timeOut, сохраняет его id, и вызывает коллбэк
function scheduleOfTimers(ms, callback) {
  const timerId = setTimeout(() => {
    callback();
    timersIds.splice(timersIds.indexOf(timerId), 1);
  }, ms);
  timersIds.push(timerId);
}

//функция которая отменяет запланированные вызовы таймаутов
function clearAllTimeouts() {
  timersIds.forEach(id => {
    clearTimeout(id);
  });
  timersIds.length = 0;
}

function newAnimateLoop() {

    activeNotes.forEach(note => {

    });
}


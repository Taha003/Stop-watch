
var min = 0;
var sec = 0;
var milSec = 0;

//To convert it into 00 when sec or min is less than 10
var dispMilliSec = 0;
var dispSec = 0;
var dispMin = 0;
document.getElementById('display').innerHTML = dispMin + ":" + dispSec + ":" + dispMilliSec



function init() {
    milSec++
    if (milSec == 10) {
        milSec = 0;
        sec++
    }

    if (sec == 60) {
        sec = 0;
        min++
    }
    if (milSec < 10) {
        dispMilliSec = "0" + milSec.toString()
    }
    else {
        dispMilliSec = milSec
    }

    if (sec < 10) {
        dispSec = "0" + sec.toString()
    }
    else {
        dispSec = sec
    }
    if (dispMin < 10) {
        dispMin = "0" + min.toString()
    }
    document.getElementById('display').innerHTML = dispMin + ":" + dispSec + ":" + dispMilliSec
}
let interval;



function start() {
    interval = window.setInterval(init, 100);
    document.getElementById('start').disabled = true;

}

function stop() {
    clearInterval(interval);
    document.getElementById('start').disabled = false;

}

function reset() {
    window.clearInterval(interval);
    min = 0;
    sec = 0;
    milSec = 0;
    document.getElementById('display').innerHTML = 00 + ":" + 00 + ":" + 00
    document.getElementById('start').disabled = false;
}


var chronometer = new Chronometer();


var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

var booleano = false;
var line = document.getElementById("splits");

function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes())[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setSeconds())[1];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.setMilliseconds())[0];
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.setMilliseconds())[1];
}

function printSplit() {

}

function clearSplits() {
    while(line.hasChildNodes()){
        line.removeChild(line.firstChild)
    }
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {
    var split = document.createElement("li");
    var content = document.createTextNode(minDec.textContent + minUni.textContent + ":" + secDec.textContent + secUni.textContent + ":" + milDec.textContent + milUni.textContent);
    split.appendChild(content);
    line.appendChild(split)

}

function setStartBtn() {
    console.log("start")
    chronometer.startClick();
    let start = setInterval(() => {
        printTime();
    }, 10)
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if (booleano === false) {
        setStartBtn();
        booleano = true;
        document.getElementsByClassName("btn start")[0].innerHTML = "STOP";
        document.getElementsByClassName("btn reset")[0].innerHTML = "SPLIT";
        document.getElementsByClassName("btn start")[0].className = "btn stop";
        document.getElementsByClassName("btn reset")[0].className = "btn split";
    } else {
        setStopBtn();
        booleano = false;
        document.getElementsByClassName("btn stop")[0].innerHTML = "START";
        document.getElementsByClassName("btn split")[0].innerHTML = "RESET";
        document.getElementsByClassName("btn stop")[0].className = "btn start";
        document.getElementsByClassName("btn split")[0].className = "btn reset";
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (booleano === false) {
        setResetBtn();
    } else {
        setSplitBtn();
    }
});
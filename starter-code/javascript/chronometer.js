
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
};

Chronometer.prototype.startClick = function () {
   
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
    }, 1000)
};

Chronometer.prototype.setMinutes = function () {
    let minutes = parseInt(this.currentTime / 60);
    return minutes;
}

Chronometer.prototype.setSeconds = function () {
    let seconds = this.currentTime % 60;
    return seconds;

}

Chronometer.prototype.twoDigitsNumber = function (current) {
    if (current > 10) {
        return current.toString();
    } else {
        return '0' + current;
    }

}

Chronometer.prototype.setTime = function () {
    this.twoDigitsNumber(this.setSeconds());
    this.twoDigitsNumber(this.setMinutes());
}

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
}

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
}
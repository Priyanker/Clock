var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

var timeOutId = setInterval(initClock, 1000);
var liveClicked = false;
function setDigitalTime(hour, minute, second) {
    var dHour = document.getElementById('hour');
    dHour.innerText = hour + ':';
    dMinute = document.getElementById('minute');
    dMinute.innerText = minute + ':';
    dSecond = document.getElementById('second');
    dSecond.innerText = second;
}

function initClock() {
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourHand.style.transform = `rotate( ${hourDeg}deg)`;
    minuteHand.style.transform = `rotate( ${minuteDeg}deg)`;
    secondHand.style.transform = `rotate( ${secondDeg}deg)`;  

    setDigitalTime(hour, minute, second);
}


var resetButton = document.getElementById('reset');
var liveButton = document.getElementById('live');

resetButton.addEventListener('click', reset);

var hour = 0,
minute = 0,
second = 0; 
var resetCounter = 0;
function reset()
{
    if(resetCounter==0 || liveClicked)
    {
        clearInterval(timeOutId);
        resetCounter++;
        liveClicked = false;
    }
    
    second++;
    var hourDeg = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 

    timeOutId  = setTimeout(reset, 1000);
    setDigitalTime('00','00','00');
    
}

liveButton.addEventListener('click', initClock1);

var liveCounter = 0;
function initClock1()
{
    liveClicked = true;
    if(liveCounter==0)
    {
        clearInterval(timeOutId);
        liveCounter++;
    }
    timeOutId = setInterval(initClock, 1000);
}
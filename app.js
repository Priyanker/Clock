var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

var intervalId = setInterval(initClock, 1000);
var liveTime = true;
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
    console.log(second);
    

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


var hour, minute, second; 
var resetCounter = 0;
resetButton.addEventListener('click', () => {
    resetCounter++;
    reset();
});
function reset()
{
    if(liveTime || liveClicked || resetCounter > 1)
    {
        console.log("hi");
        clearInterval(intervalId);
        liveClicked = false;
        liveTime = false;
        hour = minute = second = 0;
    }
    console.log("hrl");
    
    second++;
    console.log(second);
    
    var hourDeg = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;
    

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 

    console.log("hsssrl");
    setDigitalTime('00','00','00');
    intervalId = setInterval(reset, 1000);
    
}

liveButton.addEventListener('click', initClock1);

var liveCounter = 0;
function initClock1()
{
    liveClicked = true;
    if(liveCounter==0)
    {
        clearInterval(intervalId);
        liveCounter++;
    }
    intervalId = setInterval(initClock, 1000);
}
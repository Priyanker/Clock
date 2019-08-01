var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');
var hour, minute, second,
hourDeg, minuteDeg, secondDeg;

var intervalId = setInterval(initClock, 1000);
var liveState = true;
function setDigitalTime(hour, minute, second) {
    let dHour, dMinute, dSecond;
    
    dHour = document.getElementById('hour');
    if(hour === 0 && liveState){
        dHour.innerText = 12 + ':';
    } else {
        dHour.innerText = hour + ':';
    }
    dMinute = document.getElementById('minute');
    dMinute.innerText = minute + ':';
    dSecond = document.getElementById('second');
    dSecond.innerText = second;
}

function initClock() {
    date = new Date();
    hour = date.getHours() % 12;
    minute = date.getMinutes();
    second = date.getSeconds();
    
    hourDeg = (hour * 30) + (0.5 * minute);
    minuteDeg = (minute * 6) + (0.1 * second);
    secondDeg = second * 6;

    hourHand.style.transform = `rotate( ${hourDeg}deg)`;
    minuteHand.style.transform = `rotate( ${minuteDeg}deg)`;
    secondHand.style.transform = `rotate( ${secondDeg}deg)`;  

    setDigitalTime(hour, minute, second);
}


var resetButton = document.getElementById('reset');
var liveButton = document.getElementById('live');


var resetCounter = 0, resetState;
resetButton.addEventListener('click', () => {
    resetCounter++;
    resetState = false;
    reset();
});
function reset()
{
    if(liveState || (resetCounter > 1 && resetState === false))
    {
        clearInterval(intervalId);
        console.log(intervalId);
        
        liveState = false;
        hour = minute = second = 0;
        resetState = true;
    }
    
    hourDeg = (hour * 30) + (0.5 * minute);
    minuteDeg = (minute * 6) + (0.1 * second);
    secondDeg = second * 6;
    if(second === 60)
    {
        second = 0;
        minute++;
    }
    if(minute === 60){
        minute = 0;
        hour++;
    }

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 

    setDigitalTime(hour, minute, second);
    second++;
    intervalId = setTimeout(reset, 1000);
    
}

liveButton.addEventListener('click', () => {
    if(!liveState) {
        resetCounter = 0;
        initClock1();
    }
});

function initClock1()
{
    liveState = true;
    if(resetState)
    {
        resetState = false;
        clearInterval(intervalId);
    }
    intervalId = setInterval(initClock, 1000);
}
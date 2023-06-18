let hoursCount = document.querySelector('#hours')
let minutesCount = document.querySelector('#minutes')
let secondsCount = document.querySelector('#seconds')
let millisecondsCount = document.querySelector('#milliseconds')
const startButton = document.querySelector('.btn-start')
const stopButton = document.querySelector('.btn-stop')
const resetButton = document.querySelector('.btn-reset')
let hours= 00
let minutes = 00
let seconds = 00
let milliseconds =00

startButton.addEventListener('click', ()=>{
    timer= true
    stopWatch()
    
})
stopButton.addEventListener('click', ()=>{
    timer=false
})
resetButton.addEventListener('click', ()=>{
    timer = false
    hours = 0
    minutes= 0
    seconds = 0
    milliseconds = 0

    hoursCount.textContent = '00'
    minutesCount.textContent = '00'
    secondsCount.textContent = '00'
    millisecondsCount.textContent = '00'
    
    
    
})

function stopWatch() {

    if (timer) {
        milliseconds++;
 
        if (milliseconds == 99) {
            seconds++;
            milliseconds = 0;
        }
 
        if (seconds == 59) {
            minutes++;
            seconds = 0;
        }
 
        if (minutes == 59) {
            hours++;
            minutes = 0;
            seconds = 0;
        }
        hoursCount.textContent = hours;
        minutesCount.textContent = minutes;
        secondsCount.textContent = seconds;
        millisecondsCount.textContent = milliseconds;
 
        if (hours < 10) {
            hoursCount.textContent = "0" + hoursCount.textContent;
        }
 
        if (minutes < 10) {
            minutesCount.textContent = "0" + minutesCount.textContent;
        }
 
        if (seconds < 10) {
            secondsCount.textContent = "0" + secondsCount.textContent;
        }
 
        if (milliseconds < 10) {
            millisecondsCount.textContent  = "0" + millisecondsCount.textContent ;
        }
        setTimeout(stopWatch, 10);
    }
}

const time = document.getElementById("time")
const timeFormate = document.querySelector("small")

function currentTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let amOrpm = "AM"

    
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hour = hour === 0 ? hour = 12 : hour;

    if (hour > 12 ) {
        hour = hour - 12;
        amOrpm = "PM"
    } else {
        amOrpm = "AM"
    }

    time.innerText = `${hour} : ${minute} : ${seconds}`;
    timeFormate.innerText = amOrpm;

    setInterval(currentTime,1000);
}
currentTime()
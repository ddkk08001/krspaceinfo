//타이머
const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const secondEl = document.getElementById('sec')

function countDown(){
    const newYear = new Date(2022, 11, 17)
    const current = new Date()

    const diffTime = Math.abs(newYear-current)

    const day = Math.floor( diffTime/(1000*3600*24) )
    const hour = Math.floor( diffTime/(1000*3600) %24)
    const min = Math.floor( diffTime/(1000*60) %60)
    const sec = Math.floor( diffTime/(1000) %60)

    dayEl.innerHTML = formatTime(day)
    hourEl.innerHTML = formatTime(hour)
    minEl.innerHTML = formatTime(min)
    secondEl.innerHTML = formatTime(sec)
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}
countDown()

setInterval(countDown, 1000)
const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const secondEl = document.getElementById('sec')
/*
미래 팝업을 위한 코드

function openPop() {
    document.getElementById("popup_layer").style.display = "block";

}

//팝업 닫기
function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}

*/

//타이머
function countDown(){
    const newYear = new Date(2022, 8, 5)
    const current = new Date()

    const diffTime = Math.abs(newYear-current)

    const day = Math.floor( diffTime/(1000*3600*24) )
    const hour = Math.floor( diffTime/(1000*3600) %24)
    const min = Math.floor( diffTime/(1000*60) %60)
    const second = Math.floor( diffTime/(1000) %60)

    dayEl.innerHTML = formatTime(day)
    hourEl.innerHTML = formatTime(hour)
    minEl.innerHTML = formatTime(min)
    secondEl.innerHTML = formatTime(second)
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}
countDown()

setInterval(countDown, 1000)
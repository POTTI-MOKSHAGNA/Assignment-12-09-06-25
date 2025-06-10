const time = document.getElementById('time')
let timerId
const start = function(){
    timerId = setInterval(() => {
        time.textContent = new Date()
    },1000)
}
function stop(){
    clearInterval(timerId)
}
const timerStart = document.getElementById("timer");
let timerId = NaN;
function downTimer() {
  if (Number(timerStart.textContent) > 0) {
    let time = Number(timerStart.textContent) - 1
    if (time < 10) {timerStart.textContent = "0" + time}
    else {timerStart.textContent = time}
  }
  else {
    clearInterval(timerId);
    return alert('Вы победили в конкурсе!')
  }
}
timerId = setInterval(downTimer, 1000);
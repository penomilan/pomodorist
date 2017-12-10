var tone = document.getElementById("alert");
var start = document.getElementById('start');
var pause = document.getElementById('pause');
pause.disabled = true;
var stop = document.getElementById('stop');
stop.disabled = true;
var display = document.getElementById('display');
var time;
var taskId;

function refresh() {
  display.innerHTML = (Math.floor(time / 60) < 10 ? "0" : "") + Math.floor(time / 60) + ":" + (Math.floor(time % 60) < 10 ? "0" : "") + Math.floor(time % 60);
}

function countdown() {
  --time;
  refresh();
    if (time < 10) {
        time = "0"+time;
    }
  if (time  == 0) {
    stop1();
      tone.play();
      
  }
}

function work() {
  taskId = setInterval(countdown, 1000);
  time = 1500;
  refresh();
  start.disabled = true;
  pause.disabled = true;
  stop.disabled = false;
}

function rest() {
  taskId = setInterval(countdown, 1000);
  time = 300;
  refresh();
  start.disabled = true;
  pause.disabled = true;
  stop.disabled = false;
}

function stop1() {
  clearInterval(taskId);
  time = 1500;
  refresh();
  start.disabled = false;
  pause.disabled = false;
  stop.disabled = true;
}
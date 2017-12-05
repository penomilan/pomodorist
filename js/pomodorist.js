  var s=59;
  var m=24;
  var x;
function counter1() {
   if (s < 0) {
    m--;
      }
      if (m < 0) {
      	alert("YOU NEED A BREAK");
           	location.reload();
           }
   document.getElementById("count").innerHTML=m+":"+s;
       s--;
}
function counter() { 
	x = setInterval(counter1, 1000);
}
function stop() { clearInterval(x); }
function counter() {
  var n=1500;
function counter1() {
   if (n < 0) {
    location.reload();
    alert("YOU NEED A BREAK!");
      
   }
   
document.getElementById("count").innerHTML=n;
       n--;
     }
window.setInterval(counter1, 1000);
}
var n=25;

function counter() {
   var s = document.getElementById("count");
      s.innerHTML = n;
       n--;
   if (s < 0) {
       num = 25;
       numS--;
   }
   if (n < 0){
       n = 25;
       n--;
   }
    
}

setInterval(count, 100);

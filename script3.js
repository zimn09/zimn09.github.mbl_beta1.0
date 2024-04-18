let input = document.getElementById("input");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let myh3 = document.getElementById("myh3");

  function percent(percent,interval,p){
    document.getElementById("err").style.display = "none";
    p = document.getElementById("p");
    percent = 100;
    
    p.textContent = `${percent}%`;
    interval = setInterval(function(){
      percent -= 1;
      p.textContent = `${percent}%`;
      if(percent == 10){
        document.getElementById("err").style.display = "block";
        document.getElementById("pre2").onclick = function(){
          document.getElementById("err").style.display = "none";
        }
      }
      else if(percent == 0){
        clearInterval(interval);
        document.getElementById("pre2").textContent = "is out of battery"
        document.getElementById("err").style.display = "block";
        
      }
    },2000)}
  percent();
    setInterval(percent,213000);
  
let min = 1;
let max = 100;
let guess = Math.floor(Math.random() * (max - min + 1)) + min;

button.addEventListener("click", function() {
  let userGuess = input.value;

  if (userGuess == guess) {
    myh3.innerHTML = "Correct!";
  } else if (userGuess > guess) {
    myh3.innerHTML = "quess a lower number!";
  } else {
    myh3.innerHTML = "quess a higher number!";
  } 
});

reset.addEventListener("click", function() {
  input.value = "";
  myh3.innerHTML = "";
  guess = Math.floor(Math.random() * (max - min + 1)) + min;
});
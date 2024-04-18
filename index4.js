let number = document.getElementById("num");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let num =0;
let inpt = document.getElementById("inpt");
let sbmit = document.getElementById("submit")
let reset = document.getElementById("reset")

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

number.textContent = num;

plus.addEventListener("click", () => {
    num++;
    number.textContent = num;
    inpt.value = num;
});

minus.addEventListener("click", () => {
    num--;
    number.textContent = num;
    inpt.value = num;
});
sbmit.onclick = function(){
    num = parseInt(inpt.value)
    number.textContent = num;
}
reset.onclick = function(){
    num = 0;
    number.textContent = num;
    inpt.value = "";
}

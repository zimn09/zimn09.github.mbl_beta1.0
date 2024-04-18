let mbl_circle = document.getElementById("mbl-circle");
let display = document.getElementById("display");
let close_btn = document.getElementById("close-btn");
let otevření = 0;
let otevřeno = false;
let otevření2 = 0;
let otevřeno2 = false;
let h1 = document.getElementById("h1");
let h12 = document.getElementById("h12");
let p = document.getElementById("p");

function percent(percent,interval,){
  document.getElementById("err").style.display = "none"
  percent = 100;
  
  document.getElementById("p").textContent = `${percent}%`;
  interval = setInterval(function(){
    percent -= 1;
    document.getElementById("p").textContent = `${percent}%`;
    if(percent == 10){
  document.getElementById("err").style.display = "block";
  document.getElementById("err").onclick = function(){
    document.getElementById("err").style.display = "none";
  }
    }
    else if(percent == 0){
      clearInterval(interval);
      document.getElementById("pre2").textContent = "is out of battery"
      document.getElementById("err").style.display = "block";
      
   
      
      }
    
  },2000)}

function clock(){
  const now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let month1 = month+1;
  let year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2,0);
  const minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timestring = `${hours}:${minutes}`
  h1.textContent = `${day}.${month1}.${year}`;
  h12.textContent = timestring;
}
mbl_circle.addEventListener("click", () => {
  display.style.backgroundImage = "url('data:image/jpeg;base64,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')";
  display.style.backgroundSize = "100%";
  h1.style.display = "block";
  h12.style.display = "block";
  
  percent();
  setInterval(percent,213000)
  clock();
  setInterval(clock,1000)
  display.addEventListener("click", () => {
    h1.style.display = "none";
  h12.style.display = "none";
    display.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsq2Dqw_QuzCunLyjDZDUFb97qxw6-Ii5JRQ&s')";
    otevření ++;
    document.getElementById("todo-list2").style.display = "inline-block"
    document.getElementById("calc2").style.display = "inline-block"
    document.getElementById("guess").style.display = "inline-block"
    document.getElementById("counter").style.display = "inline-block"
    mbl_circle.disabled = true;
  })
});
close_btn.addEventListener("click", () => {
  display.style.backgroundImage = "";
  display.style.backgroundColor = "rgb(75, 74, 74)";
  otevření = 0;
  otevření2 = 0;
  document.getElementById("todo-list2").style.display = "none";
  document.getElementById("calc2").style.display = "none";
  document.getElementById("guess").style.display = "none";
  document.getElementById("counter").style.display = "none";
  otevřeno2 = true;
  otevřeno= true;
  h1.style.display = "none";
  h12.style.display = "none";
 mbl_circle.disabled = false;
  });
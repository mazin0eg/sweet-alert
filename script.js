let btnalert = document.querySelector("#add");
let alert = document.querySelector("#alert");
let btnclose = document.querySelector("#close");
btnalert.addEventListener("click", ()=>{
  alert.classList.remove("hidden");
})

btnclose.addEventListener("click", ()=>{
  alert.classList.add("hidden");
})
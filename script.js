let btnalert = document.querySelector("#add");
let alert = document.querySelector("#alert");
let btnclose = document.querySelector("#close");
btnalert.addEventListener("click", ()=>{
  alert.classList.remove("hidden");
})

btnclose.addEventListener("click", ()=>{
  alert.classList.add("hidden");
})



let btnalert2 = document.querySelector("#add-error");
let alert2 = document.querySelector("#alert-error");
let btnclose2 = document.querySelector("#close-error");
btnalert2.addEventListener("click", ()=>{
  alert2.classList.remove("hidden");
})

btnclose2.addEventListener("click", ()=>{
  alert2.classList.add("hidden");
})
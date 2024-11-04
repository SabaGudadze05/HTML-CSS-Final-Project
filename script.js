let burger = document.querySelector("#burger");
let x = document.querySelector("#x");
let headerNav = document.querySelector("#header_nav");

burger.addEventListener("click", ()=>{
  burger.classList.add("none");
  headerNav.style.left = "0"
  x.classList.remove("none")
})
x.addEventListener("click", ()=>{
  x.classList.add("none");
  headerNav.style.left = "-250px"
  burger.classList.remove("none")
})
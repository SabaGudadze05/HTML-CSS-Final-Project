let burger = document.querySelector("#burger");
let x = document.querySelector("#x");
let headerNav = document.querySelector("#header_nav");

burger.addEventListener("click", () => {
  burger.classList.add("none");
  headerNav.style.left = "0";
  x.classList.remove("none");
});
x.addEventListener("click", () => {
  x.classList.add("none");
  headerNav.style.left = "-250px";
  burger.classList.remove("none");
});

let sortButton = document.querySelector("#sort_button");
let sortIconDown = document.querySelector("#sort_icon_down");
let sortIconUp = document.querySelector("#sort_icon_up");
let sortButton481px = document.querySelector("#sort_button_481px");
let sortIconDown481px = document.querySelector("#sort_icon_down_481px");
let sortIconUp481px = document.querySelector("#sort_icon_up_481px");

const toggleSortIcons = (downIcon, upIcon) => {
  if (downIcon.classList.contains("sort_icon_none")) {
    downIcon.classList.remove("sort_icon_none");
    upIcon.classList.add("sort_icon_none");
  } else {
    downIcon.classList.add("sort_icon_none");
    upIcon.classList.remove("sort_icon_none");
  }
};

sortButton.addEventListener("click", () => {
  toggleSortIcons(sortIconDown, sortIconUp);
});

sortButton481px.addEventListener("click", () => {
  toggleSortIcons(sortIconDown481px, sortIconUp481px);
});

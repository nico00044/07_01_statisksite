//Burgermenu
const burger = document.querySelector(".burger"); //finder burgermenu-knappen (stregerne)
const nav = document.querySelector("nav"); //finder menuen (naigationen)
const menu = document.querySelector(".menu"); //finder menu området

burger.addEventListener("click", burgerClick); //lytter efter klik på burger
function burgerClick() {
  burger.classList.toggle("active"); //Burgermenuen åbner/lukker=toggle
  nav.classList.toggle("active"); //Menu navigation åbner/lukker=toggle
}
menu.addEventListener("click", menuClick); //lytter efter klik på menuen
function menuClick() {
  burger.classList.remove("active"); //remove fjerner den aktive del ved burgermenuen
  nav.classList.remove("active"); //remove fjerner den aktive del ved menu navigation
}

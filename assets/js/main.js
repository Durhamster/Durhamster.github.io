"use strict";
// Preload Images
let images = new Array("assets/img/profile_pic.jpg", "assets/img/icons8-html-5.svg", "assets/img/icons8-python.svg", "assets/img/icons8-sass-avatar.svg", "assets/img/icons8-typescript.svg", "assets/img/Rlogo.svg");
function preloadImage(url) {
    let img = new Image();
    img.src = url;
}
for (let i = 0; i < images.length; i++) {
    preloadImage(images[i]);
}
//Preventing URL spoofing and polluting
let url = location.href;
let p = url.indexOf("?");
if (p >= 1) {
    url = url.slice(0, p);
    self.location.replace(url);
}
//Preventing content framing
window.onload = function () {
    if (top != window)
        top.location = window.location;
};
//Detects if User is using IE
const usingIE = () => {
    return (navigator.userAgent.indexOf(`MSIE `) > -1 ||
        navigator.userAgent.indexOf(`Trident/`) > -1);
};
if (!!usingIE()) {
    alert("Hey there. It looks as though you are using Internet Explorer. You really should start using another browser (i.e. FireFox, Chrome, or Safari).");
}
// NavBar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// Language Bars
function update(bar, percent) {
    var element = document.getElementById(bar);
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= percent) {
            clearInterval(identity);
        }
        else {
            width++;
            element.style.width = width + "%";
            element.innerHTML = width * 1 + "%";
        }
    }
}
window.onload = function () {
    update("PythonBar", 95);
    update("HTMLBar", 80);
    update("SASSBar", 80);
    update("TSCBar", 70);
    update("RBar", 40);
};
// Scroll to top
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;
function handleScroll() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.6) {
        scrollToTopBtn.classList.add("showBtn");
    }
    else {
        scrollToTopBtn.classList.remove("showBtn");
    }
}
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
// Copyright year
let currentYear = new Date().getFullYear();
if (currentYear > 2021) {
    document.getElementById("year").innerHTML = "2021 - " + currentYear;
}
else {
    document.getElementById("year").innerHTML = String(currentYear);
}

// Preload Images
var images = new Array();

function preloadImages() {
  for (i = 0; i < preloadImages.arguments.length; i++) {
    images[i] = new Image();

    images[i].src = preloadImages.arguments[i];
  }
}

preloadImages("profile_pic.jpg");
preloadImages("speech.png");
preloadImages("gear.png");
preloadImages("mail-inbox.png");

// Copyright year
let currentYear = new Date().getFullYear();

if (currentYear > 2021) {
  document.getElementById("year").innerHTML = "2021 - " + currentYear;
} else {
  document.getElementById("year").innerHTML = currentYear;
}

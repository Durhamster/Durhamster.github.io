// Preload Images
var images = new Array(
  "assets/img/profile_pic.jpg",
  "assets/img/speech.png",
  "assets/img/gear.png",
  "assets/img/mail-inbox.png"
);

function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

for (let i = 0; i < images.length; i++) {
  preloadImage(images[i]);
}

// Copyright year
var currentYear: any = new Date().getFullYear();

if (currentYear > 2021) {
  document.getElementById("year").innerHTML = "2021 - " + currentYear;
} else {
  document.getElementById("year").innerHTML = currentYear;
}

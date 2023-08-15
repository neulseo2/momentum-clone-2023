const images = [
  "img0.jpg",
  "img1.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);
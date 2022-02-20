const images = [
  'background-img0.jpg',
  'background-img1.jpg',
  'background-img2.jpg',
  'background-img3.jpg',
  'background-img4.jpg'
];

const bodyEl = document.querySelector('body');

const choseImage = images[Math.floor(Math.random() * images.length)];

bodyEl.style.backgroundImage = `url('./assets/img/${choseImage}')`;
import "./assets/style/main.scss";

const images = [
  require("./assets/images/styrit.jpg"),
  require("./assets/images/nollkit.jpg"),
  require("./assets/images/digit.jpg"),
  require("./assets/images/snit.jpg"),
  require("./assets/images/fritid.jpg")
];

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.setRandomImage = () => {
  const randomImage = sample(images);
  const img = document.querySelector("#header-img");
  img.src = randomImage;
};

window.setRandomImage();

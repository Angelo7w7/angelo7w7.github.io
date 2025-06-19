const images = [
  "images/mainui.jpeg",
  "images/menu.jpeg",
  "images/search.jpeg",
  "images/lowstock.jpeg",
  "images/notify.jpeg",
  "images/settings.jpeg",
  "images/add.jpeg",
  "images/editSearch.jpeg",
  "images/delete.jpeg",
  "images/about.jpeg",
];

let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage(index) {
  if (index >= 0 && index < images.length) {
    carouselImage.src = images[index];
    currentIndex = index;
  }
}

prevButton.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(newIndex);
});

nextButton.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % images.length;
  showImage(newIndex);
});

"use strict";

const locations = [
  {
    img: "01.jpg",
    title: "The Thinking man",
    desc: "A man pondering alone sitting on a bridge near a lake",
  },
  {
    img: "02.jpg",
    title: "Beautiful Swiss Town",
    desc: "This is a beautiful swiss town",
  },
  {
    img: "03.jpg",
    title: "Big Ben",
    desc: "This is the Big Ben on the river Thames",
  },
  {
    img: "04.jpg",
    title: "Dresden by night",
    desc: "This is a beautiful picture of Dresden by night",
  },
  {
    img: "05.jpg",
    title: "French Polynesie",
    desc: "Picture of the french Polynesie",
  },
];

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const items = document.querySelector(".items");
const thumbnailsContainer = document.querySelector(".tb-container");
let currentImage = 0;
let itemsAll;

function createItem(index) {
  const item = document.createElement("div");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = `img/${images[index]}`;
  img.alt = `01 ${index}`;

  item.append(img);
  return item;
}

function createThumbnail(index) {
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("tb");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = `img/${images[index]}`;
  thumbnailImg.alt = `thumbnail ${index}`;

  thumbnail.append(thumbnailImg);
  return thumbnail;
}

function setActive(index) {
  itemsAll[currentImage].classList.remove("active");
  thumbnailsContainer.querySelector(".tb.active").classList.remove("active");
  currentImage = index;
  itemsAll[currentImage].classList.add("active");
  thumbnailsContainer
    .querySelectorAll(".tb")
    [currentImage].classList.add("active");
}

function showPrev() {
  let newIndex = currentImage - 1;
  if (newIndex < 0) {
    newIndex = itemsAll.length - 1;
  }
  setActive(newIndex);
}

function showNext() {
  let newIndex = currentImage + 1;
  if (newIndex >= itemsAll.length) {
    newIndex = 0;
  }
  setActive(newIndex);
}

for (let i = 0; i < images.length; i++) {
  const item = createItem(i);
  const thumbnail = createThumbnail(i);

  items.append(item);
  thumbnailsContainer.append(thumbnail);

  if (currentImage === i) {
    item.classList.add("active");
    thumbnail.classList.add("active");
  }

  thumbnail.addEventListener("click", function () {
    setActive(i);
  });
}

itemsAll = document.querySelectorAll(".item");

prev.addEventListener("click", function () {
  showPrev();
});

next.addEventListener("click", function () {
  showNext();
});

/* aggiungere l'autoplay */
const start = document.getElementById("start");
const stop = document.getElementById("stop");
let slideShowInterval;

start.addEventListener("click", function () {
  slideShowInterval = setInterval(showNext, 3000);
});

stop.addEventListener("click", function () {
  clearInterval(slideShowInterval);
});

itemsAll = document.querySelectorAll(".item");

/* aggiunta ciclo forEach */
itemsAll.forEach((element, index) => {
  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `
    <h2>${locations[index].title}</h2>
    <p>${locations[index].desc}</p>
  `;
  element.appendChild(description);
});

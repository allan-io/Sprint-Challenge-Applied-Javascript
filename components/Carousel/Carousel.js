/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
      - assets/carousel folder
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let index = 0

const carouselContainerDiv = document.querySelector(".carousel-container")

const imgArr = ["mountains.jpeg", "computer.jpeg", "trees.jpeg", "turntable.jpeg"]

function carouselMaker() {
  const carousel = document.createElement("div")
  carousel.className = "carousel"
  carousel.innerHTML += `
    <div class="left-button"> < </div>
    <img class="car-img"/>
    <div class="right-button"> > </div>
  `
  return carousel
}

const carouselDiv = carouselMaker()
carouselContainerDiv.appendChild(carouselDiv)

const img = document.querySelector("img")
img.src = "./assets/carousel/" + imgArr[index]
console.log(img)

// create index variable to keep track of current img

// add event listner on left arrow
const leftArrow = document.querySelector(".left-button")
leftArrow.addEventListener("click", (event) => {
  // want to change the src of the img div to the previous index on the array
  index--
  if (index < 0) {
    index = 3
  }
  img.src = "./assets/carousel/" + imgArr[index]
})


// add event listener on right arrow
const rightArrow = document.querySelector(".right-button")
rightArrow.addEventListener("click", (event) => {
  // want to change the src of the img to the next img in the array
  index++
  if (index > 3) {
    index = 0
  }
  img.src = "./assets/carousel/" + imgArr[index]
  console.log(event.target)
})
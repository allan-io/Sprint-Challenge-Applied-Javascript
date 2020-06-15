// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerDiv = document.querySelector(".header-container")
function Header() {
    const headerDiv = document.createElement("div")
    headerDiv.className = "header"
    headerDiv.innerHTML += `
        <span class="date">SMARCH 28, 2019</span>
        <h1>Lambda Times</h1>
        <span class="temp">98°</span>
    `
    return headerDiv
}

const header = Header()
headerDiv.appendChild(header)
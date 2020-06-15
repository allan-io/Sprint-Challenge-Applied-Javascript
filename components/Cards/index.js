// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let allArticles = []
const articleArr = ["bootstrap", "javascript", "jquery", "node", "technology"]
const cards = document.querySelector(".cards-container")
function cardMaker(obj) {
    
    const card = document.createElement("div")
    card.className = "card"
    const result = innerHTML(obj, card)
    cards.appendChild(result)

}



function innerHTML(el, card) {
    card.innerHTML += `
            <div class="headline">${el.headline}</div>
            <div class="author">
                <div class="img-container">
                    <img src=${el.authorPhoto} />
                </div>
            <span>By ${el.authorName}</span>
            </div>
        `
        return card
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const data = response.data.articles
        return data
    })
    .then(data => {
        for(key in data) {
            data[key].forEach((el) => {
                cardMaker(el)
            })
        }
    })

    

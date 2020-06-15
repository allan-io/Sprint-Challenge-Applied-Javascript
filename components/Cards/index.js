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
const allArticles
const articleArr = ["bootstrap", "javascript", "jquery", "node", "technology"]
const cards = document.querySelector(".cards-container")
function cardMaker(dataArr) {

    const card = document.createElement("div")
    card.className = "card"
    dataArr.forEach(el => {
        innerHTML(el, card)
    })
    
    return card
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
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    // .then(response => console.log(response.data.articles))
    .then(response => {
        const data = response.data.articles
        // loop throgh articles and call cardMaker for each article?
        return data
    })
    .then(data => {
        articleArr.forEach(el => {
            const result = cardMaker(data[el])
            cards.appendChild(result)
        })
    })
    .then(result => {
        cards.appendChild(cardMaker(result))
    }) 

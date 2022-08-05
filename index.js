let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let player = {
    name: "You have ",
    chips: 15
}
let playerEl = document.getElementById("bbc")



function randomCard() {
    let randomNumber = Math.random() * 13 + 1
    let flooredNumber = Math.floor(randomNumber)
    if (flooredNumber > 10) {
        return 10
    }
    if (flooredNumber === 1) {
        return 11
    }
    else {
        return flooredNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = player.name + "$" + player.chips
    if (player.chips > 0) {
        renderGame()
    } 
    else {
        player.chips = 15
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent +=  cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "You've got BlackJack"
        player.chips += 10
        hasBlackJack = true
    }else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 1
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}
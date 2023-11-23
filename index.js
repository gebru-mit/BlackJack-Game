let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
let start = true
function startGame(){
    if(start){
        start = false
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
        
    }
   
}
function getRandomCard(){
    //generates a random integer from 1 and 13(1 and 13 are included) 
    let x = Math.floor(Math.random() * 13) + 1; 
    let y = 0
    if(x === 1){
        y = 11
    } else if(x > 10){
        y = 10
    } else{
        y = x
    }
   return y 
    
}
    
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    y()
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        start = false 
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! Start again."
        hasBlackJack = true
        start = true
    } else {
        message = "You're out of the game! Start again."
        isAlive = false
        start = true
    }
    messageEl.textContent = message
}

function y(){    
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
    
}
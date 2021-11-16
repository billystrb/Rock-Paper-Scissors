// Generate random pick for the computer 
let options = ["rock","paper","scissors"]
let x = " "
function comupterPlay(x){
    computersOption = Math.floor(Math.random() * options.length )
    return options[computersOption]
}
let computersChoice = comupterPlay(x)
//  ------------------------------------

// create an object to add the results on 
let wraper = document.querySelector('#playerChoice')
// ------------------------------------------

// Any button selected must 1. display your choice, 
// 2. return computer's choice ,3. calcualte the winner
let rockButton = document.querySelector('#rock')
rockButton.addEventListener('click',rockPlayround)
function rockPlayround() {
    let theResult = playround("rock",computersChoice)
    displayResult(theResult,'rock')
}

let paperButton = document.querySelector('#paper')
paperButton.addEventListener('click',paperPlayround)
function paperPlayround() {
    let theResult = playround("paper",computersChoice)
    displayResult(theResult,'paper')
}

let scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click',scissorsPlayround)
function scissorsPlayround() {
    let theResult = playround("scissors",computersChoice)
    displayResult(theResult,'scissors')
}

// ------------------------------------------------------------

// Find the winner of the game 
let playersChoice 

function playround(playersChoice,computersChoice){
    switch (playersChoice){
        case "rock" :
            if(computersChoice == "rock"){
                return 'tie'
            }else if(computersChoice == "scissors"){
                return 'rock'
            }else{
                return 'paper'
            }
        case "paper" :
            if(computersChoice == "rock"){
                return 'paper'
            }else if(computersChoice == "scissors"){
                return 'scissors'
            }else{
                return 'tie'
            }
        case "scissors" :
            if(computersChoice == "rock"){
                return 'rock'
            }else if(computersChoice == "scissors"){
                return 'tie'
            }else{
                return 'scissors'
            }

    }
}

// --------------------------------------

// create divs and fill them with both the players and the computers choice
function displayResult(aResult,playersPlay){
    let computersPlay = document.createElement('div')
    let playerPlays = document.createElement('div')
    playerPlays.textContent = 'You chose ' + playersPlay
    computersPlay.textContent = 'The computer picks ' + computersChoice
    wraper.appendChild(playerPlays)
    wraper.appendChild(computersPlay)
    displayWinner(aResult,computersChoice,playersPlay)
}
// -------------------------------------------

// Display the winner altering the answer in case of a tie 
function displayWinner(aResult,npc,pc){
    if (pc == npc ){
        let result = document.createElement('div')
        result.textContent = ' Its a tie '
        wraper.appendChild(result)
    }else {
        let result = document.createElement('div')
        result.textContent = ' Winner is ' + aResult 
        wraper.appendChild(result)
    }
}
// -----------------------------------------------

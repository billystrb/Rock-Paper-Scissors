let options = ["rock","paper","scissors"]
let x = " "
function comupterPlay(x){
    computersOption = Math.floor(Math.random() * options.length )
    return options[computersOption]
}
let computersChoice = comupterPlay(x)
console.log(computersChoice)

let playersChoice = " "

alert("This is a clasic rock,paper,scissors game. Navigate through the game pressing enter")
alert("Its a best of 3 game to determine the winner")
let computerWins = 0
let playerWins = 0


for(let i = 0; i<3; i++){
    alert("Round " + (i+1))
    do{
        let userOption = prompt("Type rock, paper or scissors to start the game"," ")
        playersChoice = userOption.toLocaleLowerCase()
        console.log(playersChoice)

        if( (playersChoice != "rock") && (playersChoice != "paper") && (playersChoice != "scissors") ){
            alert("Wrong input. Try again")
        }

    }while( (playersChoice != "rock") && (playersChoice != "paper") && (playersChoice != "scissors") )
        
    alert("Computers random choice is: " + computersChoice)

    switch (playersChoice){
        case "rock" :
            if(computersChoice == "rock"){
                alert("Its a tie !")
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else if(computersChoice == "scissors"){
                alert("You win !")
                playerWins += 1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else{
                alert("Computer wins ")
                computerWins +=1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }
        case "paper" :
            if(computersChoice == "rock"){
                alert("You win !")
                playerWins +=1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else if(computersChoice == "scissors"){
                alert("Computer wins")
                computerWins +=1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else{
                alert("It's a tie !")
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }
        case "scissors" :
            if(computersChoice == "rock"){
                alert("Computer wins")
                computerWins +=1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else if(computersChoice == "scissors"){
                alert("It's a tie !")
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }else{
                alert("You win !")
                playerWins +=1
                alert("Current score: " + "Computer:" + computerWins + "-Player:" + playerWins)
                break
            }

    }

}

if(playerWins>computerWins){
    alert("Congratulations, you won the game !!!")
}else if(computerWins>playerWins){
    alert("Computer wins the game, better luck next time.")
}else{
    alert("It seems like you cant beat a computer")
}

alert("If you want to play this game again refresh this page")
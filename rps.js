let options = ["rock","paper","scissors"]
let x = " "
function comupterPlay(x){
    computersOption = Math.floor(Math.random() * options.length )
    return options[computersOption]
}
let computersChoice = comupterPlay(x)
console.log(computersChoice)

let playersChoice = " "

alert("This is a clasic rock,paper,scissors game. Press enter to begin")

do{
    let userOption = prompt("Type rock, paper or scissors to start the game"," ")
     playersChoice = userOption.toLocaleLowerCase()
    console.log(playersChoice)

    if( (playersChoice != "rock") && (playersChoice != "paper") && (playersChoice != "scissors") ){
        alert("Wrong input. Try again")
    }

}while( (playersChoice != "rock") && (playersChoice != "paper") && (playersChoice != "scissors") )
    

// have declared both pc and player choices



switch (playersChoice){
    case "rock" :
        if(computersChoice == "rock"){
            alert("Its a tie !")
            break
        }else if(computersChoice == "scissors"){
            alert("You win !")
            break
        }else{
            alert("Computer wins ")
            break
        }
    case "paper" :
        if(computersChoice == "rock"){
            alert("You win !")
            break
        }else if(computersChoice == "scissors"){
            alert("Computer wins")
            break
        }else{
            alert("It's a tie !")
            break
        }
     case "scissors" :
        if(computersChoice == "rock"){
            alert("Computer wins")
            break
        }else if(computersChoice == "scissors"){
            alert("It's a tie !")
            break
        }else{
            alert("You win !")
            break
        }

}
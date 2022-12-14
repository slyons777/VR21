function RPS() {
    //computer option result set-up
    const computerInput = num => {
        if (num <= 0.33) return "rock"
        else if (num <=66) return "paper"
        return "scissors"
    }
    
    let userOption = prompt("Rock, paper, or scissors?").toLowerCase()
    let computerOption = computerInput(Math.random())

    let options = ["rock","paper","scissors"]

    if(!userOption || options.indexOf(userOption) === -1){
        return "Please select 'Rock', 'Paper', or 'Scissors'.";
      }

    

    //user option result set-up
    if (userOption === computerOption) return "Looks like a TIE!"

    if (userOption === "rock" && computerOption === "paper") return "Ooohhh likes you lost this one!"

    if (userOption === "paper" && computerOption === "rock") return  "Winner winner chicken dinner! Computer loses!"

    if (userOption === "scissors" && computerOption === "paper") return "The computer has nothing on you! You're the winner!"
 
    if (userOption === "paper" && computerOption === "scissors") return "Ouch! Computer got ya this time!"

    return `Take your trophy! Computer chose: ${computerOption}`

}
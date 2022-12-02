function RPS() {
    let options = ["rock","paper", 'scissors']
    let userOption = prompt("Rock, paper, or scissors?")
    let computerOption = computerInput(Math.random())

    //computer option result set-up
    const computerInput = num => {
        if (num <= 0.33) return "rock"
        else if (num <=66) return "paper"
        return "scissors"
    }

    //user option result set-up
    if (userOption === computerOption) return "Looks like a TIE!"

    if (userOption === "rock" && computerOption === "paper") return "Ooohhh likes you lost this one!"

    if (userOption === "paper" && computerOption === "rock") return  "Winner winner chicken dinner! Computer loses!"

    if (userOption === "scissors" && computerOption === "paper") return "The computer has nothing on you! You're the winner!"
 
    if (userOption === "paper" && computerOption === "scissors") return "Ouch! Computer got ya this time!"

    return `Take your trophy! Computer chose: ${computerOption}`

}
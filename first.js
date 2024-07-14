let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//3rd
const generateCompChoice = () =>{
    const object = ["rock", "paper", "scissors"];
    const randI = Math.floor(Math.random()*3);
    return object[randI];
};
const draw = () =>{
    msg.innerText = "Game Was Drawn. Play Again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost! ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor = "red";
    }
}
//2nd
const playGame = (userChoice) =>{
    const compChoice = generateCompChoice();
    console.log("Comp's choice is " , compChoice);

    if(userChoice == compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, siccsor
            userWin = compChoice == "paper" ? false : true;
        }else if(userChoice == "paper"){
            //rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};
//1st
choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

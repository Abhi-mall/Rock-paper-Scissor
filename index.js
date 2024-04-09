const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const self = document.querySelector("#self");
const comp = document.querySelector("#comp");

let userScore = 0;
let comScore = 0;

let comChoiceGen = () =>{
    let options = ["rock" , "paper" , "scissors"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
 }

let drawGame = () => {
    msg.innerHTML = "Draw";
    msg.style.backgroundColor = "#00224D"
}

let showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        self.innerHTML = userScore;
        msg.innerHTML = `You Win`;
        msg.style.backgroundColor = "Green";
    }else{
        comScore++;
        comp.innerHTML = comScore;
        msg.innerHTML = " You lose";
        msg.style.backgroundColor = "Red";
    }
   
}

let playGame = (userChoice) => {
    // user choice 
    
    // comChoice
     let comChoice = comChoiceGen();
     
     if(userChoice === comChoice){
        drawGame();
     }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
     }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})
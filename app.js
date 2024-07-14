let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#comScore");
const msgContainer = document.querySelector(".message")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const genCompChoice =() =>{
    let options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const showWinner =(userWin,compChoice,userChoice)=>{
    if(userWin){
        console.log("You win");
        userScore+=1;
        yourScore.innerText = userScore;
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("computer wins!");
        CompScore+=1;
        computerScore.innerText = CompScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    console.log(`User choice = `,userChoice);
    const compChoice= genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(userChoice === compChoice){
        msg.innerText = "Its a Draw...Play again";
        msg.style.backgroundColor='brown';
    } else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true:false;
        } else{
            userWin = compChoice === "paper" ? true:false;
        }
        if(userWin==true){
            
        }else{
            
        }
        showWinner(userWin,compChoice,userChoice);
    }
}

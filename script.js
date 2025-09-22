let yourScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = ()=>{
//rock,paper,scissors
const options = ["rock","paper","scissor"];
const randidx = Math.floor(Math.random()*3);
return option[randidx];
}
const drawgame = ()=>{
    console.log("game was draw");
};
const showWinner =(userWin)=>(){
    if(userWin){
        console.log("You Win!");
        msg.innerText = "You Win!";
    }else{
        console.log("You Lose!");
                msg.innerText = "You Lose!";

    }
};


const playGame = (yourChoice)=>{
    console.log("your choice = ",yourChoice);
    const compChoice = genCompChoice();
        console.log("comp choice = ",compChoice);
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice ==="paper"? false : true;
    }else if(userChoice ==="paper"){
        userWin = compChoice ==="scissor"? false : true;

    }else{
        useerWin = compChoice ==="rock" ? false: true;
    }
    showWinner(userWin);
}

};
choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        playGame(yourChoice);
    });
});

let yourScore = 0;
let compScore = 0;

// Select DOM elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const yourScoreEl = document.getElementById("your-score");
const compScoreEl = document.getElementById("comp-score");

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

// Handle draw
const drawGame = () => {
    msg.innerText = "It's a Draw!";
};

// Show winner
const showWinner = (userWin) => {
    if (userWin) {
        yourScore++;
        msg.innerText = "You Win!";
    } else {
        compScore++;
        msg.innerText = "You Lose!";
    }
    // Update scores
    yourScoreEl.innerText = yourScore;
    compScoreEl.innerText = compScore;
};

// Play the game
const playGame = (yourChoice) => {
    const compChoice = genCompChoice();
    console.log("Your choice:", yourChoice);
    console.log("Comp choice:", compChoice);

    if (yourChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;

        if (yourChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if (yourChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (yourChoice === "scissor") {
            userWin = compChoice === "paper";
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.id.toLowerCase();
        playGame(yourChoice);
    });
});

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");


// Used To Generate Choice From Computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Used To Display Draw Game Message
const drawGame = () => {
    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Used To Display Message Winner between User and Computer
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore += 1;
        user_score.innerText = userScore;
    }
    else {
        msg.innerText = `You Lose ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScore += 1;
        comp_score.innerText = compScore;
    }
};

// Used To Decide The Winner between User and Computer
const playGame = (userchoice) => {
    const compChoice = genCompChoice();

    if (userchoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {

            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

// Used To Check Users Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
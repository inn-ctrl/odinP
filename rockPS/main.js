const userInput = document.querySelectorAll('button')

const answerDiv = document.getElementById("answer");

const choices = ['rock', 'paper', 'sissors']
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

let userChoice = null;


userInput.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id;
        if(computerChoice == 'rock' && userChoice == "scissors"){
            answerDiv.textContent = 'YOU LOSE!';
        }
        else if(computerChoice == 'scissors' && userChoice == "paper"){
            answerDiv.textContent = 'YOU LOSE!';
        }
        else if(computerChoice == 'paper' && userChoice == "rock"){
            answerDiv.textContent = 'YOU LOSE!';
        }
        else{
            answerDiv.textContent = 'YOU WIN!';
        }
    })
})

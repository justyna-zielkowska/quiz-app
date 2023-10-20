//Which is the most widely spoken language in the world?
//Spanish Mandarin English German
//Mandarin

//Which is the only continent in the world without dessert?
//Nort America Asia Africa Europe
//Europe

//Who invented Computer?
//Charles Babbage Henry Luce Henry Babbage Charles Luce
//Charless Babbage

//References
const timeLeft = document.querySelector(".time-left");

const quizContainer = document.getElementById("container");
const nextBtn = document.getElementById("next-button");
const countOfQuestion = document.querySelector(".number-of-question");
const displayContainer = document.getElementById("display-container");
const scoreContainer = document.querySelector(".score-container");
const restart = document.getElementById(".restart");
const userScore = document.getElementById("user-score");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray =
    [
        {
            id: "0",
            question: "Which is the most widely spoken language in the world?",
            options: ["Spanish", "Mandarin", "English", "German"],
            correct: "Mandarin"
        },

        {
            id: "1",
            question: "Which is the only continent in the world without dessert?",
            options: ["Nort America", "Asia", "Africa", "Europe"],
            correct: "Europe"
        },

        {

            id: "2",
            question: "Who invented Computer?",
            options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
            correct: "Charless Babbage"
        }
    ];


   
// Timer

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        };
    }, 1000);
};


//Display quiz

const quizDisplay = (questionCount) => {
    const quizCards = document.querySelectorAll(".container-mid");
    //hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

// Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //ramdomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz cart creation
        const div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        const question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
            <button class="option-div" onclick="checker(this)">${i.options[0]}<button>
            <button class="option-div" onclick="checker(this)">${i.options[1]}<button>
            <button class="option-div" onclick="checker(this)">${i.options[2]}<button>
            <button class="option-div" onclick="checker(this)">${i.options[3]}<button>`;
        quizContainer.appendChild(div);
    };
};


// Function to check  if option is correct or not

function checker(userOption) {
    const userSolution = userOption.innerText;
    const question =
        document.getElementsByClassName("container-mid")
        [questionCount];
    const options = question.querySelectorAll("option-div");

    // if user clicked answer == correct option stored in object

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        // for making the correct option     
        options.forEach((element) => {
            if (element.innerText == quizArray[queationCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval (stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled == true
    });
}

//initialize setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
};

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
})

//Hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide")
};
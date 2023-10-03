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

  
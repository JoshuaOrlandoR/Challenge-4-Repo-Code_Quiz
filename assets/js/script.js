// Variables
var quizStart = document.querySelector('#startbtn');
var quizScore = document.querySelector('#scorebtn');
var startScreen = document.querySelector('.startscreen');
var startContent = document.querySelector('.startcontent');
var quizContent = document.querySelector('.quizContent');
var timeRemaining = document.querySelector('#timeRemaining');
var timeLeft = 120
var optionOne = document.querySelector('#optionTextOne');
var optionTwo = document.querySelector('#optionTextTwo');
var optionThree = document.querySelector('#optionTextThree');
var optionFour = document.querySelector('#optionTextFour');
var questionOption = document.querySelector('.questionOption');
var questionHold = document.querySelector('#questionHold')
var currentQuestion = {};
var availableQuestions = [];
var SCORE_POINTS = 10;
var score = 0;
var scoreValue = document.querySelector('#scoreValue');


var i = 0; //testing something - not working - NEVERMIND FIGURED IT OUT (not entirely sure how this worked, a tutor helped explain what was going on but sort of lost on this - will look into it)

var questionSet = [
    {
        question:"Which HTML element should contain the JavaScript?",
        choices: ["<scripting>", "<javascript>","<script>","<js>"],
        answer: "<script>"
    },

    {
        question:"How do you write an IF statement for executing code if i is NOT equal to 2?",
        choices: ["if (i NOT = 2)","if (i!=2)","if(iNaN=2)","if(/2)"],
        answer: "if (i!=2)"
    },

    {
        question:"How does a FOR loop start?",
        choices: ["for (i <= 8; i++)","for (i = 0; i <= 8; i++)","for (i = 0; i <= 8)","for i = 1 to 8"],
        answer: "for (i = 0; i <= 8; i++)"
    },

    {
        question:"JavaScript is the same as Java",
        choices: ["True","False","Conditionally True","Debatable"],
        answer: "False"
    },

    {
        question:"What will the following code return: Boolean(10 > 9)",
        choices: ["True","False","NaN","1"],
        answer: "True"
    },


    {
        question:"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choices: ["alt","cont","value","src"],
        answer: "alt"
    },

    {
        question:"HTML comments start with ____ and end with -->",
        choices: ["<--","<C--","<!--","</--"],
        answer: "<!--"
    },


    {
        question:"What does CSS stand for?",
        choices: ["Computer Style Sheets","Cascading Style Sheets","Compututational Style Sheets","Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
];




// Click start button to go to quiz 
quizStart.addEventListener("click", function(event) {
startScreen.classList.add("remove");
startContent.classList.add("remove");
quizContent.classList.remove("remove");
score = 0 ;
window.alert("Hi! Just a heads up, we are currently experiencing a bug regarding answer selection. Please ensure you click within the white box to select your answer. Unfortunately we weren't able to sort this bug out in time, but we're working on it!")
time();
questionFill();
scoreFill();
});

// Timer function 
function time() {
    timeValue = setInterval(function () {
       timeLeft--;
       timeRemaining.textContent = "Time Remaining: "+ timeLeft + " seconds";
   
       if (timeLeft === 0) { //need to change this slightly I believe, not working exactly how it should
       clearInterval(timeValue);
       gameEnd(); //need to write 
    }
    }, 1000)
   };

//Functions for increasing and updating score
function scoreFill() {
    scoreValue.innerHTML = score + " points!";
};

//.foor rounds down here to remove decimals, the score metric is very arbitrary I was just testing random score systems and this one stuck
function increaseScore() {
    score = Math.floor(score + (timeLeft / 3));  
} ;


// Function to set questions - wanted to try to randomize order, but the method I tried kept breaking the code - will come back to it if I have time    
function questionFill() {
    if(i < questionSet.length) {
        question.textContent = questionSet[i].question;
        optionOne.textContent = questionSet[i].choices[0];
        optionTwo.textContent = questionSet[i].choices[1];
        optionThree.textContent = questionSet[i].choices[2];
        optionFour.textContent = questionSet[i].choices[3];
    }  else {
        gameEnd();
    } 
}

//On click event for answer check
questionHold.addEventListener("click", function(event) {
    var event = event.target;
    answerCheck(event.textContent.trim());
});

//Answer check - moves forward and adds to score if correct, deducts time if not 
function answerCheck(event) {
    if (i >= questionSet.length) {
        clearInterval(timeValue);
        gameEnd();
    } else {
        if (event === questionSet[i].answer) {
            window.alert("Correct!");
            increaseScore();
            i++;
        } else {
            window.alert("Incorrect! Time deducted");
            timeLeft -=10;
        }
        scoreFill();
        questionFill();
    }
}




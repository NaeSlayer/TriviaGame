$(document).ready(function () {

var questionArray = 
[
    // question 1
    {
        "answer": 1,
        "question": "What is the best type of animal?",
        "options" : ["cat", "dog", "whale", "sloth"],
    },
    // question 2
    {
        "answer": 2,
        "question": "What color is the air",
        "options": ["yellow", "vacant", "spongy", "pink"],

    },
]

var questions;
var option;
var index = 0;
var correct = 0;
var incorrect = 0;


// this loads a new question and answer choices and resets the timer
function renderQuestion() {
$("#questions").show();
$("#options").show();
$("#timer").show();
$("#answer").hide();
$("#questions").empty();
$("#options").empty();
questions = $("<div>");
questions.text(questionArray[index].question);
$("#questions").append(questions);

for (var i = 0; i <questionArray[index].options.length; i++) {
    option = $('<button type="button" class="btn btn-default">');
    option.attr("id", "option-" + i)
    option.text(questionArray[index].options[i]);
    $("#options").append(option);   
}
clearTimeout(timerId);
timeLeft = 30;
timerId = setInterval(countdown, 1000);
}



function loadAnswerPage(answer) {
    $("#questions").hide();
    $("#options").hide();
    $("#timer").hide();
    $("#answer").show();
    if (questionArray[index].answer === answer) {
        $("#answer").text("Correct");
        correct++;
    }
   else if (answer === "Times Up") {
        $("#answer").text("You are out of time!!!!");
        incorrect++
}
    else {
        $("#answer").text("Incorrect!!!");
        incorrect++
    }
}

// 30 second timer
var timerId
var timeLeft = 30;
var time = document.getElementById("timer");


function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
        loadAnswerPage("Times Up");
    } else {
        $("#timer").text(timeLeft + " seconds remaining");
        timeLeft--;
    }
}

renderQuestion();






// console.log(questions[0].answer);
// console.log(questions[0].question);
// console.log(questions[0].options[1]);

// console.log(questions[1].answer);
// console.log(questions[1].question);
// console.log(questions[1].options[2]);

})
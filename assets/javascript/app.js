$(document).ready(function () {

    var questionArray =
        [
            // question 1
            {
                "answer": [1, "dog"],
                "question": "What is the best type of animal?",
                "options": ["cat", "dog", "whale", "sloth"],
                // "image": "../images/80s.gif"
            },
            // question 2
            {
                "answer": [2, "spongy"],
                "question": "What color is the air",
                "options": ["yellow", "vacant", "spongy", "pink"],

            },
        ]

    var questions;
    var option;
    var index = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var gif;
    var answer;
    // 30 second timer
    var timerId;
    var timeLeft = 30;
    var time = document.getElementById("timer");

    function initializeGame() {
        $("#start").text("Click here to begin");
    }



    function startNewGame() {
        index = 0;
        renderQuestion();
    }

    // this loads a new question and answer choices and resets the timer
    function renderQuestion() {
        clearTimeout(timerId);
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        $("#start").hide();
        $("#questions").show();
        $("#options").show();
        $("#result").hide();
        $("#correct").hide();
        $("#questions").empty();
        $("#options").empty();
        $("#result").empty();
        $("#correct").empty();
        questions = $("<div>");
        questions.text(questionArray[index].question);
        $("#questions").append(questions);


        for (var i = 0; i < questionArray[index].options.length; i++) {
            option = $('<button type="button" class="answer btn btn-default">');
            option.attr("id", "option-" + i)
            if (i == questionArray[index].answer[0]) {
                option.data('correct', 1);
            } else {
                option.data('correct', 0);
            }
            option.text(questionArray[index].options[i]);
            $("#options").append(option);
        }

    }



    function loadAnswerPage(answer) {
        $("#questions").hide();
        $("#options").hide();
        $("#result").show();
        $("#correct").show();
        gif = $("<img>");
        gif.attr("src", questionArray[index].image);
        if (answer === "correct") {
            $("#result").text("Correct");
            correct++;
        }
        else if (answer === "Time's Up") {
            $("#result").text("You are out of time!!!!");
            incorrect++
        }
        else {
            (answer === "incorrect");
            $("#result").text("Incorrect");
            unanswered++;
        }
        index++;
        setTimeout(renderQuestion, 3000);

    }


    function countdown() {
        if (timeLeft === 0) {
            clearTimeout(timerId);
            loadAnswerPage("Time's Up");
        } else {
            $("#timer").text(timeLeft + " seconds remaining");
            timeLeft--;
        }
    }

    // renderQuestion();
    initializeGame();
    // startNewGame();

    $("#start").on("click", function () {
        startNewGame();
    });

    $(".answer").on("click", function () {
        $("#correct").append("The correct answer is " + questionArray[index].answer[1]);
        console.log($(this).data('correct'));
        if ($(this).data("correct") == 1) {
            loadAnswerPage("correct");
        }
        else {
            loadAnswerPage("incorrect");
        }

        clearTimeout(timerId);

    })

})
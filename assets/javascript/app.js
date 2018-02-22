$(document).ready(function () {

    var questionArray =
        [
            // question 1
            {
                "answer": [1, "776 BC"],
                "question": "When were the first ancient olympic games held?",
                "options": ["980 BC", "776 BC", "33 AD", "200 BC"],
                // "image": "../images/80s.gif"
            },
            // question 2
            {
                "answer": [2, "Zeus"],
                "question": "The ancient olympig games were a festival celebrating which god?",
                "options": ["Athena", "Apollo", "Zeus", "Achilles"],

            },
            // question 3
            {
                "answer": [3, "1896"],
                "question": "When were the first modern-day olympics held?",
                "options": ["1784", "1688", "1910", "1896"],

            },
            // question 4
            {
                "answer": [1, "1924"],
                "question": "When were the first winter olympics held?",
                "options": ["1910", "1924", "1896", "1940"],

            },
            // question 5
            {
                "answer": [2, "Norway"],
                "question": "Which country has won the most medals at the winter olympics?",
                "options": ["United States", "Russia", "Norway", "China"],

            },
            // question 6
            {
                "answer": [0, "United States"],
                "question": "Which country has won the most medals at the summer olympics?",
                "options": ["United States", "Brazil", "France", "Spain"],

            },
            // question 7
            {
                "answer": [2, "8"],
                "question": "How many times has the United States hosted the olympics?",
                "options": ["4", "9", "8", "6"],

            },
            // question 8
            {
                "answer": [1, "1980"],
                "question": "Which year did the United States boycott the olympics?",
                "options": ["1964", "1940", "1980", "1930"],

            },
            // question 9
            {
                "answer": [2, "Michael Phelps"],
                "question": "Who holds the most olympic medals?",
                "options": ["Shawn White", "Larisa Latynina", "Michael Phelps", "Jenny Thompson"],

            },
            // question 10
            {
                "answer": [1, "Middle East"],
                "question": "Each of the Olympic rings represents a region of the world. Which of the following is not a region represented by an Olympic ring?",
                "options": ["Africa", "Middle East", "Oceana", "Europe"],

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
        index = 0;
    }



    function startNewGame() {
        // index = 0;
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

    function gameOver() {
        $("#result").hide();
        $("#correct").hide();
        $("#game-over").show();
        $("#number-correct").show();
        $("#number-incorrect").show();
        $("#number-unanswered").show();
        $("#play-again").show();
        $("#game-over").append("Game over! See how you did!");
        $("#number-correct").append("Number of correct answers: " + correct);
        $("#number-incorrect").append("Number of incorrect answers: " + incorrect);
        $("number-unanswered").append("Number of unanswered questions: " + unanswered);
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

    renderQuestion();
    // initializeGame();
    // startNewGame();

    $("#start").on("click", function () {
        startNewGame();
    });

    $("#play-again").on("click", function () {
        startNewGame();
    })

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
window.onload = function() {
    var startButton = $('<button type="button" class="begin btn btn-dark">Begin</button>')
    $("#game-window").append(startButton);
};
$(document).ready(function() {
    let questions = [
        {number: 1, q: "Do you like cats?",  "a": "yes", "b": "no", "c": "maybe", "d": "yes, but I prefer dogs", ansChar: "d", answer: "yes, but I prefer dogs", image: "./assets/images/js.png"},
        {number: 2, q: "Do you like dogs?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer cats", answer: "yes", image: "./assets/images/js.png"},
        {number: 3, q: "Do you like hamsters?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer mice", answer: "maybe", image: "./assets/images/js.png"}
    ];
    let questionNumber;
    let userGuess;
    let timeRemaing = 10;
    let timeFeedback = 5;
    let intervalId;
    let feedback;
    //userGuess = undefined;????

    function initializeGame() {
        questionNumber = 0;
    }

    function displayQuestion() {
        runT();
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var qDiv = $('<div class="question">' + questions[questionNumber].q + '</div>');
        var aDiv = $('<div class="choice" id="a">a. ' + questions[questionNumber].a + '</div>');
        var bDiv = $('<div class="choice" id="b">b. ' + questions[questionNumber].b + '</div>');
        var cDiv = $('<div class="choice" id="c">c. ' + questions[questionNumber].c + '</div>');
        var dDiv = $('<div class="choice" id="d">d. ' + questions[questionNumber].d + '</div>');
        var timeDiv = $('<div id="time">Time Remaining: 10 seconds</div>');
        $(".cardDiv").append(qDiv, aDiv, bDiv, cDiv, dDiv, timeDiv);
        answerSelected();
    }

    // function checkAnswer() {
    //     userGuess = $(".choice")
    // }

    function displayFeedback() {
        runF();
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var feedbackDiv = $('<div>' + feedback + '</div>');
        var imageDiv = $('<img src="' + questions[questionNumber].image + '" width="200px">');
        var timeDiv = $('<div id="time">Next question in... 5 seconds</div>');
        $(".cardDiv").append(feedbackDiv, imageDiv, timeDiv);
        
    }

    function answerSelected() {
        $(".choice").on("click", function() {
            resetScreen();
            userGuess = $(this).attr("id");
                if (userGuess === questions[questionNumber].ansChar) {
                    feedback = "Correct! The answer is " + questions[questionNumber].answer;
                }
                else if (userGuess === undefined) {
                    feedback = "You didn't respond in time...the answer was " + questions[questionNumber].answer;
                }
                else {
                    feedback = "Nope! The answer was " + questions[questionNumber].answer;
                }
            
            console.log(questions[questionNumber].d);
            displayFeedback();
            //checkAnswer();
        });
    }

    function runT() {
        clearInterval(intervalId);
        intervalId = setInterval(decRemainingTime, 1000);
      }

    function runF() {
        clearInterval(intervalId);
        intervalId = setInterval(decTimeFeedback, 1000);
    }

    function decRemainingTime() {
        timeRemaing--;
        $("#time").html('<div id="time">Time Remaining: ' + timeRemaing + ' seconds</div>');
        if (timeRemaing === 0) {
            stop();
        }
    }

    function decTimeFeedback() {
        timeFeedback--
        $("#time").html('<div id="time">Next question in... ' + timeFeedback + ' seconds</div>');
        if (timeFeedback === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
      }

      function resetScreen() {
        $(".cardDiv").remove();
      };

    $(".begin").on("click", function() {
        $(this).remove();
        initializeGame();
        displayQuestion();
    });

    
});
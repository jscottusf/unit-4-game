var numberOptions;
var crystalNumber;
var wins = 0;
var losses = 0;

$(document).ready(function() {
    //audio elements
    var clickElement = document.createElement("audio");
    clickElement.setAttribute("src", "./assets/sounds/chime.wav");
    var winElement = document.createElement("audio");
    winElement.setAttribute("src", "./assets/sounds/win.wav");
    var lossElement = document.createElement("audio");
    lossElement.setAttribute("src", "./assets/sounds/loss.wav");
    var drumElement = document.createElement("audio");
    drumElement.setAttribute("src", "./assets/sounds/drums.wav");

    //when you click on the begin button, initialize game
    $(".btn-lg").text("Begin");
    $(".btn-lg").on("click", function() {
        drumElement.play();
        setNumbers();
        $(".btn-lg").text("Restart Game");
        $(document).ready(function() {
            var targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#number-to-guess").text("Number to Guess: " + targetNumber);
            var counter = 0;
            for (var i = 0; i < 4; i++) {
                crystalNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "./assets/images/gem" + [i] + ".jpg");
                imageCrystal.attr("data-crystalvalue", crystalNumber);
                crystalNumbersSplice();
                $("#crystals").append(imageCrystal);
            }

            //when you click on crystal image, do stuff
            $(".crystal-image").on("click", function() {
                clickElement.play();
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                counter += crystalValue;
                $("#score").text("Your Score: " + counter);
                if (counter === targetNumber) {
                clickElement.pause();
                winElement.play();
                wins++;
                $("#winner").text("Winner winner chicken dinner! Try again?");
                $("#crystals").empty();
                $("#win-count").text("Wins: " + wins);
                }
                else if (counter > targetNumber) {
                clickElement.pause();
                lossElement.play();
                losses++;
                $("#winner").text("Try again, loser");
                $("#crystals").empty();
                $("#loss-count").text("Losses: " + losses);
                }
            });
        });
        $(".btn-lg").on("click", function() {
            setNumbers();
        });
    });
});

//remove numbers from options array so that crystals all have different random numbers
function crystalNumbersSplice() {
    var index = numberOptions.indexOf(crystalNumber);
    if (index > -1) {
    numberOptions.splice(index, 1);
    }
}

//reset game and number array
function setNumbers() {
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    counter = 0;
    $("#crystals").empty();
    $("#score").empty();
    $("#winner").empty();
}
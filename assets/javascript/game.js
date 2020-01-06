var numberOptions;
var crystalNumber;

$(document).ready(function() {
    $(".btn-lg").text("Begin");
    $(".btn-lg").on("click", function() {
        setNumbers();
        $(".btn-lg").text("Restart Game");
        $(document).ready(function() {
            var targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text("Number to Guess: " + targetNumber);
            var counter = 0;
            for (var i = 0; i < 4; i++) {
                crystalNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "./assets/images/gem" + [i] + ".jpg");
                imageCrystal.attr("data-crystalvalue", crystalNumber);
                console.log(crystalNumber);
                crystalNumbersSplice();
                $("#crystals").append(imageCrystal);
            }
            $(".crystal-image").on("click", function() {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                counter += crystalValue;
                $("#score").text("Your Score: " + counter);
                if (counter === targetNumber) {
                alert("You win!");
                $("#crystals").empty();
                }
                else if (counter > targetNumber) {
                alert("You lose!!");
                $("#crystals").empty();
                }
            });
        });
        $(".btn-lg").on("click", function() {
            $("#crystals").empty();
            $("#score").empty();
            setNumbers();
            });
    });
});

function crystalNumbersSplice() {
    var index = numberOptions.indexOf(crystalNumber);
    if (index > -1) {
    numberOptions.splice(index, 1);
    }
}

function setNumbers() {
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    counter = 0;
}
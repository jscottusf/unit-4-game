$(document).ready(function() {
    $(".btn-lg").on("click", function() {
        $(document).ready(function() {
            var targetNumber = Math.floor(Math.random() * 100) + 19;
        $("#number-to-guess").text("Number to Guess: " + targetNumber);
            var counter = 0;
            var numberOptions = [10, 5, 3, 7];
            for (var i = 0; i < numberOptions.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "./assets/images/gem" + [i] + ".jpg");
                imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                $("#crystals").append(imageCrystal);
            }
            $(".crystal-image").on("click", function() {
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                counter += crystalValue;
                alert("New score: " + counter);
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
            });
    });
});

$(document).ready(function() {

    var boxes = ["red", "blue", "green", "yellow"];
    var i;
    var sequence = Array();
    var answers = Array();
    var d = 0;
    var y = 0;
    var x = 0;

    function gamePlay() {
        /*$(this).hide()*/
        i = Math.floor((Math.random() * 4));
        var selected = "#" + boxes[i] + "-box";

        function buildSequence() {
            sequence[d] = selected;
            d++;
        }

        buildSequence();

        function animates(n) {
            $(sequence[n]).animate({ opacity: "0.5" }, "slow");
            $(sequence[n]).animate({ opacity: "1" }, "slow");
            n++;

            if (n <= d) {
                setTimeout(function() { animates(n); }, 2000);
            }
        }

        animates(0);
        console.log(selected);

        var clickedBox = "#" + $("#" + boxes[i] + "-box").attr('id')
        console.log(clickedBox);

        $("#" + boxes[i] + "-box").click(function() {
            console.log("Clicked");
            $(this).data("clicked", true);
        });

        $("#" + boxes[i] + "-box").click(function() {
            if ($(this).data('clicked') == true && "#" + this.id == clickedBox) {
                answers.push(clickedBox);
                console.log(answers)
            }
            else {
                console.log("it didnt worked");
                console.log(this.id)
            }
        });
    }


    $("#start-button").click(function() {
        gamePlay();

        console.log(sequence);
        console.log(d);

    });

    $("#answer-button").click(function() {
        for (y = 0; y < sequence.length; y++) {
            if (sequence[y] == answers[y]) {
                console.log("correct");
            }
            else {
                console.log("incorrect");
            }
        }
        for (var i = answers.length; i > 0; i--) {
            answers.pop();
            console.log(answers);
        }
    });

})

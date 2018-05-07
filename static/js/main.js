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
    }


    $("#start-button").click(function() {
        $("#lose-message").hide();
        $(".box").show();
        $("#start-button").hide();
        setTimeout(gamePlay(), 8000);
        $("#answer-button").show();

        console.log(sequence);
        console.log(d);

    });

    for (a = 0; a <= 3; a++) {
        $("#" + boxes[a] + "-box").click(function() {
            var clickedBox = "#" + this.id;
            answers.push(clickedBox);
            $(this).animate({ opacity: "0.5" }, "slow");
            $(this).animate({ opacity: "1" }, "slow");
            console.log(answers);
        });
    }

    $("#answer-button").click(function() {
        for (y = 0; y < sequence.length; y++) {
            if (sequence[y] == answers[y]) {
                $("#lose-message").hide();
                $(".box").show();
                $("#start-button").hide();
                setTimeout(gamePlay(), 8000);
                $("#answer-button").show();
                console.log("correct");
            }
            else {
                $(".box").hide();
                $("#lose-message").show();
                $("#start-button").show();
                $("#answer-button").hide();

            }
        }
        for (var t = answers.length; t > 0; t--) {
            answers.pop();
            console.log(answers);
        }
    });

});

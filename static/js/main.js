$(document).ready(function() {

    var boxes = ["red", "blue", "green", "yellow"];
    var i;
    var sequence = Array();
    var answers = Array();
    var y = 0;
    var x = 0;

    function gamePlay(i) {
        /*Assigns a random number between 1 and 4 to variable i. selects which of the 4 boxes to be in the sequence and add to the array called sequence*/
        i = Math.floor((Math.random() * 4));
        var selected = "#" + boxes[i] + "-box";
        function buildSequence() {
            sequence.push(selected);
        }

        buildSequence();
        console.log(selected);
    }

    /*Animates the selected boxes in the sequence*/
    function animates(n) {
        $(sequence[n]).animate({ opacity: "0.5" }, "slow");
        $(sequence[n]).animate({ opacity: "1" }, "slow");
        n++;

        if (n <= sequence.length) {
            setTimeout(function() { animates(n); }, 2000);
        }
    }

/* when the start or next button is selectet this unhides the boxes*/
    $("#start-button, #next-button").click(function() {
        $("#lose-message").hide();
        $(".box").show();
        $("#start-button").hide();
        $("#answer-button").show();
        $("#correct-message").hide();
        $("#next-button").hide();
        gamePlay();
        animates(0);

        console.log(sequence);
        console.log(sequence.length);

    });

    /*When user selects a box this is added to the answer array in the same order it is seleceted and animates the clicked box*/
    for (a = 0; a <= 3; a++) {
        $("#" + boxes[a] + "-box").click(function() {
            var clickedBox = "#" + this.id;
            answers.push(clickedBox);
            $(this).animate({ opacity: "0.5" }, "slow");
            $(this).animate({ opacity: "1" }, "slow");
            console.log(answers);
        });
    }

    /*When the answer button is clicked this will compare the sequence array to the answer array to see if the user has selected correct sequence. The answer array is then emptied ready for next answer
    if answer is incorrect the sequence array is also emptied ready for a new game*/
    $("#answer-button").click(function() {
        for (y = 0; y < sequence.length; y++) {
            if (sequence[y] == answers[y] && sequence.length == answers.length) {
                console.log("correct");
                $("#next-button").show();
                $("#correct-message").show();
                $("#answer-button").hide();
                $(".box").hide();
            }


            else {
                $(".box").hide();
                $("#lose-message").show();
                $("#correct-message").hide();
                $("#start-button").show();
                $("#answer-button").hide();
                $("#next-button").hide();

                for (var t = sequence.length; t > 0; t--) {
                    sequence.pop();
                    console.log(sequence);
                }
            }
        }
        for (var t = answers.length; t > 0; t--) {
            answers.pop();
            console.log(answers);
        }
    });

});

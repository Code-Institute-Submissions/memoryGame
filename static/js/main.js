$(document).ready(function() {
    var boxes = ["red", "blue", "green", "yellow"];
    var i;
    var sequence = Array();
    var d = 0;

    $(".start-button").click(function() {
        i = Math.floor((Math.random() * 4));
        var selected = "#" + boxes[i] + "-box";

        function buildSequence() {
            sequence[d] = selected;
            d++;
        }

        $(selected).animate({ opacity: "0.5" }, "slow");
        $(selected).animate({ opacity: "1" }, "slow");


        buildSequence();
        
        console.log(boxes[i]);
        console.log(sequence);
    });



    /* $(".box").click(function() {
             i = Math.floor((Math.random() * 4));
             sequence[d] = boxes[i];
             d++;
         });
         
         console.log(boxes[i]); console.log(sequence);*/

});

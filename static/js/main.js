$(document).ready(function() {
    var boxes = ["red","blue","green","yellow"]
    
    $(".box").click(function() {
        $(this).animate({opacity: "0.5"}, "slow");
        $(this).animate({opacity: "1"}, "slow");
    });
});

$(document).ready(function() {
    var boxes = ["red","blue","green","yellow"]
    
    $(".box").click(function() {
        $(this).animate({opacity: "0.5"}, "slow");
        $(this).animate({opacity: "1"}, "slow");
    });
    
    $(".start-button").click(function sequence(){
        var random = Math.floor((Math.random()*4));
        $("#" + boxes[random] + "-box").animate({opacity: "0.5"}, "slow");
        $("#" + boxes[random] + "-box").animate({opacity: "1"}, "slow")
        console.log(boxes[random]);
    })
    
});



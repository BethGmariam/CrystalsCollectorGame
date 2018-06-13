$(document).ready(function() {

    var targetNumber="";
    var yourScore=0;
    var winsCounter=0;
    var lossCounter=0;

    function randomInterval(min,max){ // generates integer value between max and min
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function initialFn() { 
        targetNumber=randomInterval(19,120);// asign randon target value between(19-120)by using the random function defined above
        yourScore=0;
        var crystal=[$(".yellow"), $(".blue"), $(".red"), $(".mix")];
        for (var i=0; i<crystal.length; i++) {
           crystal[i].attr("data-imageValue", randomInterval(1,12));// asign random value between (1-12) to each crystal.
        };
        $("#targetNumber").html(targetNumber);// display initial target value to player
        $("#wins").html(winsCounter);
        $("#loss").html(lossCounter);
        $("#score").html(yourScore);
    }

    initialFn();
    
    $(".crystal").on("click", function(){
        yourScore += parseInt($(this).attr("data-imageValue")); // used data attribute to evaluate Score
        $("#score").html(yourScore);
        if(yourScore === targetNumber) {
            winsCounter++;
            initialFn();
        }
        else if (yourScore > targetNumber) {
            lossCounter++;
            initialFn();
        }
    });
   




    });

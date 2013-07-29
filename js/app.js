$(document).ready(function() {

    var max = counter;

    console.log(max);

    function assignNumber(number) {
        $(".number:last").text(number);
    }

    $(".arrow_next").click(function() {
        
        if(counter < max) counter++;
        else counter = 1;

        assignNumber(counter);
        
        $("html").css("background-image", "url('../content/" + counter + ".jpg'");
    });

    $(".arrow_previous").click(function() {

        if(counter > 1) counter--;
        else counter = max;

        assignNumber(counter);

        $("html").css("background-image", "url('../content/" + counter + ".jpg'");
    });
})
var random_result;
var loss = 0 ;
var win = 0 ;
var previous = 0 ;

// Reset

//var resetAndStart = function () {}
// random number generator
random_result = Math.floor(Math.random() * 101) + 19
$("#random").html('Match This Number: ' + random_result);



// game with 4 crystals with random results
// every crystal needs to have a random number between 1-12
for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);
}

// crystal click 

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous)
    console.log(previous);




    if(previous > random_result) {
       // console.log("you lost!")
       lost++;

       $("#loses").html(loss)

       previous = 0;

       resetAndStart();

    }
    else if( previous === random_result){
       // console.log("you win!")
       win++;

       $("wins").html(win)

       previous = 0;

       resetAndStart();

    }
    // Total score
});

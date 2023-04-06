var msg1 =document.getElementById("massage1");
var msg2 =document.getElementById("massage2");
var msg3 =document.getElementById("massage3");


var answer =Math.floor(Math.random()*100) +1;

var no_of_guesses =  0;
var guessed_nums = [];


function play() {
    var user_guess =document.getElementById("guess").value;
    if(user_guess <1 || user_guess>100){
        alert("please enter a number between 1 to 100");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if(user_guess <answer){
            msg1.textContent ="Your no is too low";
            msg2.textContent="No. of guesses: "+ no_of_guesses;
            msg3.textContent="guessed no are :" + guessed_nums;
        }
        else if(user_guess >answer){
            mag1.textContent ="Your no is too high";
            msg2.textContent="No. of guesses: "+ no_of_guesses;
            msg3.textContent="guessed no are :" + guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent ="yippie you win !!";
            msg2.textContent="The number was :" +answer;
            msg3.textContent="you gusssed it in " + no_of_guesses + "guesses";
        }
    }
}
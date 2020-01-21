function add_numbers_1() {
var X = 10;
console.log(15 + X);
}
function add_numbers_2() {
    console.log(X+126);
}
add_numbers_1();
add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 16) {
    document.getElementById("Greeting").innerHTML = "How you doin this evening?";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are too young to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("words").innerHTML = x;
}
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening, time for a beer!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
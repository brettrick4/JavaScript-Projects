// A = "Always ";
// B = "remember: ";
// document.write(A + B);

// X = "you ";
// Y = "are ";
// document.write(X + Y);

// M = "a piece of garbage, ";
// N = "just like everyone else. ";
// document.write(M + N);
 
function count_to_ten() {
    let Digit = "";
    var X = 1;  //Defines the variable X as having a value of 1//
    while (X < 11) { //Stops counting at ten//
        Digit += "<br>" + X;
        X++;    
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}
function myFunction() {
    var str = "My name is Brett, I am a human, that is what my \"parents\" would have me beleive, anyway. The jury is still out on that, I'm afraid! Now to add more words and see what the count is. Bet its close to 200!";
    var n = str.length;  //Counts how many letters are in the string//
document.getElementById("poop").innerHTML = n;
}

let Instruments = ["Guitar", "Banjo", "Ukulele", "Base", "Violin", "Sitar", "Lute"];
var Content = "";
var Y;
function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics() {
//     let x = document.createElement("IMG");
//     x.setAttribute("src", "./kittens/Cat_Pic_3.jpg");
//     x.setAttribute("width", "300");
//     x.setAttribute("height", "220");
//     x.setAttribute("alt", "cute kitty!");
//     document.body.appendChild(x);
// }
    var Cat_Picture = [];
    Cat_Picture[0] = "playing";
    Cat_Picture[1] = "grooming";
    Cat_Picture[2] = "sleeping";
    Cat_Picture[3] = "running";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[0] + ".";
    }
    function constant_function() {
        const Car = {make:"Toyota ", model:"Sienna", color:"blue"};
        Car.color = "grey ";
        Car.price = "$1300";
        Car.speed = "120mph";
        document.getElementById("Constant").innerHTML = "The top-speed of the " + 
        Car.make +  Car.model + " is " + Car.speed
    }
    var X = math_Function(4, 18);
    function math_Function(a, b) {
        return a*b;
    }
    document.getElementById("math").innerHTML = X;

function MyFunction() {
    var sentence = "I am learning";
    sentence += " a great deal from this cereal box!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
var x = MathFunction(214, 40);
function MathFunction(a, b) {
document.getElementById("math").innerHTML = x;
return a * b;
}

var x = myFunction(3, 17);
document.getElementById("math").innerHTML = x;
function myFunction(a, b) {
 return a * b; 
}

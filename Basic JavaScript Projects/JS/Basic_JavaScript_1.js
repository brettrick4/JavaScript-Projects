function myFunction () {
var Family = "The Simosons", Dad="Homer", Mom="Marge", Daughter ="Lisa", Son ="Bart", Baby ="Maggy";
var Dad = Dad.fontcolor("blue"); var Daughter = Daughter.fontcolor("yellow");
var Mom = Mom.fontcolor("green"); var Son = Son.fontcolor("orange"); var Baby = Baby.fontcolor("pink");
document.write(Baby);
}
function the_Function(name) {
   return "Good job " + name;
}
document.getElementById("name").innerHTML = the_Function("Brett!");

var X = math_Function(4, 5);
function math_Function(a, b) {
   return a * b;
}
document.getElementById("math").innerHTML = X;


let car = {
   make: "Dodge ",
   model: "Viper ",
   year: "2021 ",
   color: "red ",
   description : function() {
      return "The car is a " + this.year + this.color + this.make + this.model;
   }
};
document.getElementById("Car_Object").innerHTML = car.description();


var text = "";
var i;
for (i = 0; i < 10; i++) {
   if (i === 4) {break; }
   text += "the number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
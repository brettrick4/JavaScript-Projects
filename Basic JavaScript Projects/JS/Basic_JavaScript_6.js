function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You are not":"You are";
    document.getElementById("Vote").innerHTML = Can_vote + " old enough to vote.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge","Viper",2020,"Red");
var Emily= new Vehicle("Jeep","Trail Hawk",2019,"Black and White");
var Erik= new Vehicle("Ford","Pinto",1971,"Mustard");
function MyFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
    // "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    // " manufactured in " + Emily.Vehicle_Year;
}
function Nested_Function() {
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var Starting_point=111;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point; 
    }    
}
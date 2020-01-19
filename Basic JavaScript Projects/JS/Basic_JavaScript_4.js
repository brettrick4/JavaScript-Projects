

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Breed: "Labrador",
        Color:"Black",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Animal").innerHTML = Animal.Breed;
}
function my_Dictionary() {
    var Person = {
        FirstName: "Brett",
        Lastname: "Dyer",
        Age: 40,
        Hair: "Brown",
    };
    delete Person.Age;
    document.getElementById("Person").innerHTML = Person.Age; 
}
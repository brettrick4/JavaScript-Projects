function displayType(character) {
   var characterType = character.getAttribute("data-character-type");
   alert(characterType + "is the main charcter in the book " + character.innerHTML + "!");
}
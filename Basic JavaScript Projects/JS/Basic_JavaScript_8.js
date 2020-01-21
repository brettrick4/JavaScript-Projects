function full_sentence() {
    var part_1 = "I will ";
    var part_2 = "make this mother ";
    var part_3 = "into a friggin' ";
    var part_4 = "sentence if it ";
    var part_5 = "takes all night!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
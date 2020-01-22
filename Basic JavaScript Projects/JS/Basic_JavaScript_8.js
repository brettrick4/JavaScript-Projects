function full_sentence() {
    var part_1 = "I will ";
    var part_2 = "make this mother ";
    var part_3 = "into a friggin' ";
    var part_4 = "sentence if it ";
    var part_5 = "takes all night!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence ="All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(0,21);
    document.getElementById("Slice").innerHTML = Section;
}
function index_function() {
    var str ="Find the image hidden within the picture of a waterfall. If you can see the image, you don't need glasses!";
    var pos = str.indexOf("within");
    document.getElementById("index").innerHTML = pos;
}
function UpperCase() {
    var str = "how 'bout them blazers, huh?";
    var res = str.toUpperCase();
    document.getElementById("UpperCase").innerHTML = res;
}
function search_method() {
    var str = "Visit sunny South Florida! The chances you will be murdered are pretty small, really, if you think about it.";
    var n = str.search("small");
    document.getElementById("Search").innerHTML = n;
}
function string_Method() {
    var X = 1/4;
    document.getElementById("Number_to_string").innerHTML = X.toString(); 
}
function precision_Method() {
    var X = 1234567890.0987654321;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}
function Fixed_Function() {
    var num = 4.5566778899;
    var n = num.toFixed(6);
    document.getElementById("Fixed").innerHTML = n;
}
// <!--I don't understand why this is primitive value of a string, it's just the whole string-->
 function valueOf_Function() {  
    var str = "What exactly is meant by 'primitive value'? It seems to display the entire string.";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}
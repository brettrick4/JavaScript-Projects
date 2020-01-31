// function Color_Function() {
// var Color_Output;
// var Colors = document.getElementById("Color_Input").value;
// var Color_String = " is a terribly boring color";
// switch(Colors) {
//       case "Beige":
//          Color_Output = "Beige" + Color_String;
//          break;
//       case "Tan":
//          Color_Output = "Tan" + Color_String;
//          break;
//       case "Khaki":
//          Color_Output = "Khaki" + Color_String;
//          break;
//       case "Brown":
//          Color_Output = "Brown" + Color_String;
//             break;
//       case "Coffee":
//          Color_Output = "Coffee" + Color_String;
//          break;
//       default:
//          Color_Output = "Please enter a color exactly as written on the above list.";
//    } 
//    document.getElementById("Output").innerHTML = Color_Output;
// }  

// function myFunction() {
//    var A = document.getElementsByClassName("Click");
//    A[1].innerHTML = "Changed!";
// }
// function myCanvas() {
//    var c = document.getElementById("myCanvas");
//    var ctx = c.getContext("2d");
//    var img = document.getElementById("kitty");
//    ctx.drawImage(img,0,0);
// }

   var c = document.getElementById("canCanvas");
   var ctx = c.getContext("2d");

   var grd = ctx.createLinearGradient(10,0,0,14);
   grd.addColorStop(0,"blue");
   grd.addColorStop(1,"red");

   ctx.fillStyle = grd;
   ctx.fillRect(30, 30, 160, 100);

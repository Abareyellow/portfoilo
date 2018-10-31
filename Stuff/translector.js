var message ="hello";
var message2 ="";
for (var x = 0; x < message.length; x++){
  var letter = message.charAt(x);
  if (letter =="a" ||letter =="e" ||letter =="i" ||letter =="o" || letter =="u"){
  message2 =message2+"ub"+letter;
}
else {
  message2= message2+letter;
}
}
alert(message2);

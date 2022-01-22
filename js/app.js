

var name=prompt("What is your name?");

var Gender=prompt("What is your Gender?(male/female)");
var lG=Gender.toLowerCase();
var age=prompt("Enter your age?");
if(age<=0){alert("Your age is less tha or equal zero ")};
var welcom=confirm("Do you want to skip wellcoming message?");

if(welcom===false){if(lG==="male"){alert("Welcome Mr " +name);}else if(lG==="female"){alert("Welcom Ms "+name)}else{alert("Welcome")}};





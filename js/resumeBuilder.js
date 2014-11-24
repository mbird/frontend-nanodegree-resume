// $("#main").append("Ted");

// var awesomeThoughts = "I am Ted and I am AWESOME!"
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
var name = "Ted Tedson";
var role = "Spell Caster";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
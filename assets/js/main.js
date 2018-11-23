let hacker1= "A";
console.log("The driver\'s name is " + hacker1);
let hacker2= prompt("What is your name ");
console.log("The navegator\'s is " + hacker2); 
if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longuest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length){
    console.log("Wow, you both got equal long names, " + hacker1.length + " characters")
}
var driver= "";
for(var i=0;i<hacker1.length;i++){
    driver+= (hacker1.charAt(i) + " ");
    } 
console.log(driver.toUpperCase());

var navi= "";
for(var i=hacker2.length - 1; i >= 0; i--){
    navi+= (hacker2.charAt(i));
    } 
console.log(navi);

if(hacker1 < hacker2) {
    console.log("The driver names goes first");
} else if (hacker1 > hacker2) {
    console.log("Yo, navigator name goes first definately");
} else if (hacker1 === hacker2){
    console.log("Wow, you both got the same name")
}

var palindrom= prompt("Give me a new string and check if its palindrome");
console.log("The new string is " + palindrom);
var newPalindrom= palindrom.replace(/\W/g, "").toLowerCase();

var reversePalindrom= ""
for(var i=newPalindrom.length - 1; i >= 0; i--){
    reversePalindrom+= newPalindrom.charAt(i);
    }

console.log(reversePalindrom)

if (newPalindrom === reversePalindrom) {
    console.log("The string " + palindrom + " is a palindrom");
} else {
    console.log("The string " + palindrom + " is not a palindrom");
}

var parragraph1="Lorem ipsum dolor sit amet, \
consectetur adipiscing elit. Cras vitae posuere est, \
faucibus molestie arcu. Mauris venenatis commodo leo a auctor.\
Donec eu molestie justo. In gravida lectus enim, vel fermentum orci dapibus at. \
Sed nunc libero, sagittis a hendrerit eget, convallis nec nibh. \
Maecenas pulvinar purus sed finibus consequat. Maecenas a tellus ante.Cras congue ligula at egestas sodales. \
Praesent id tempus massa, sed facilisis ipsum. Etiam neque eros, \
lobortis ut ante sed, tincidunt aliquet ex. Ut facilisis neque ante, \
non bibendum enim euismod sed. Curabitur ac pellentesque magna. \
Nam id metus suscipit, mattis diam sit amet, blandit nunc. \
Aenean ut semper ante. Duis in fringilla lacus. \
Aenean rhoncus lectus eu nulla gravida laoreet. Cras aliquet urna quis dui tempor finibus.Ut placerat purus non lobortis scelerisque. \
Ut finibus massa eget neque porttitor malesuada. \
Sed magna dui, egestas nec lectus at, interdum auctor tortor. \
In sagittis, neque ac convallis sodales, magna sapien tristique mauris, \
eget congue ante nunc at dolor. Nunc faucibus rhoncus elementum. \
Nam nec tortor lacus. Phasellus sit amet rhoncus dui. Vestibulum molestie, \
odio id efficitur dignissim, nibh felis semper ipsum, quis tempus nunc tortor et velit.";

var aliasParagraph1=parragraph1.replace(/\W/g, "");
var aliasParagraph1Words= aliasParagraph1.length-1;
console.log("The parragraph1 has " + aliasParagraph1Words + " words");

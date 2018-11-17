let hacker1= "INES";
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
var keep = ""
for(var i=0;i<hacker1.length;i++){
    keep+= (hacker1.charAt(i) + " ");
} 
console.log(keep);
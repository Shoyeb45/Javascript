let lowerString = "AryAn ChaUhAn";

// upper case and lower case
console.log(lowerString.toLowerCase());
console.log(lowerString.toUpperCase());

//trim character

let t = "    I am shoyeb   ";
console.log(t);
console.log(t.trim());

//Substring

lowerString = lowerString.toUpperCase(); //Upperacase

let partString = lowerString.slice(2, 4);
console.log(partString);

//concat

let str1 = "I am Shoyeb";
let str2 = " Ansari";
console.log(str1.concat(str2)); //Adding two strings

let strRes = "My age is " + 12 ; 
console.log(strRes);

//replace

str1 = str1.replace("Shoyeb", "Mohammad");
console.log(str1);

let a = "hemmo";

console.log(a.replace("m", "l"));  //replace first instance
console.log(a.replaceAll("m", "l")); //using replaceAll

//charAt()

console.log(lowerString.charAt(3)); //A sholud be printed







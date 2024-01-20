//Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function vowel(str){
    let count = 0;
for(let i = 0 ;i<str.length ; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
       count++;
    }
}
return count;
}

let name = prompt("Enter your name:")

let numOfVowels = vowel(name)

console.log("The number of vowels in the string is:",numOfVowels)

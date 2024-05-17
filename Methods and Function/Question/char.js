function print_char(a) {
    if(a >= 65 && a <= 90 || a >= 97 && a <= 122) {
        return String.fromCharCode(a);
    } else {
        throw "Not valid ascii code of alphabet.";
    }
} 

let a = 65
console.log(print_char(96));

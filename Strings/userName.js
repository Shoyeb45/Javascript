let name = prompt("Enter your full name:");
name = name.toLowerCase();
let mark;
for(let i=0 ; i<name.length ; i++){
    if( name[i] === " "){
        mark = i;
    }
}

let firstName = "", lastName = "";

for(let i = 0 ; i<mark ; i++){
    firstName += name[i];
}


for(let i = mark+1 ; i<name.length ; i++){
    lastName += name[i];
}


let username  = firstName + lastName;
console.log("Your username is :" , "@"+username+username.length);
let companyName = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//a.
companyName.shift();
console.log("a.\n",companyName);

//b.
//Updated array = [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
companyName.splice(1, 1, "Ola");
console.log("b.\n",companyName);

//c.
//Updated array = [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]
companyName.push("Amazon");
console.log("c.\n",companyName);
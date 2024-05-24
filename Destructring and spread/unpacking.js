const names = ["Shoyeb", "Prakhar", "Navneet", "Priyanshu", "Ravi"]

// Unpacking for array
let [n1, n2, n3, n4, n5] = names;
console.log(n1, n2, n3, n4, n5);

// Omiting the variable
let[name1, name2, , name3, name4] = names;
console.log(name3, name2);


// Unpacking the object

const rect = {
    w : 4,
    h : 4,
    area : 16,
};

let {w, h, area} = rect; // same as keys
console.log(w, h, area);


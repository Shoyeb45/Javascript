const stud = {
    roll_no: 134,
    name : "Shoyeb",
    mobile_number : 132144234,
    tenth: 94,
    twelth: 94,

    some_fun: () =>{
        return `${this.mobile_number}`;
    }
};


console.log(stud.name);
console.log(stud["mobile_number"]);

stud.password = "Nahi_batana";
console.log(stud["password"]);

console.log(stud.some_fun);
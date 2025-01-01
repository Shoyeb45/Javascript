// Date

let myDate = new Date();
console.log(`To string: \t\t\t${myDate.toString()}`);
console.log(`To ISO string: \t\t\t${myDate.toISOString()}`);
console.log(`To date string: \t\t${myDate.toDateString()}`);
console.log(`To json string: \t\t${myDate.toJSON()}`);
console.log(`To Locale string: \t\t${myDate.toLocaleString()}`);
console.log(`To Locale Date string: \t\t${myDate.toLocaleDateString()}`);
console.log(`To Locale Time string: \t\t${myDate.toLocaleTimeString()}`);
console.log(`To Time string: \t\t${myDate.toTimeString()}`);
console.log(`To UTC string: \t\t\t${myDate.toUTCString()}`);


console.log(typeof(myDate));

console.log();

let myCreatedDate = new Date(2025, 1, 1);   // date starts from 0

console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 0, 1, 5, 3);   // with time also

let dateEx1 = new Date("2025-01-01"); // y-m-d
console.log(dateEx1.toLocaleDateString());

let dateEx2 = new Date("01-19-2029"); // mm-dd-yy
console.log(dateEx2.toLocaleDateString());



// Timestamps

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Milliseconds from 1970
console.log(typeof myTimeStamp); // Milliseconds from 1970
// now we can perform operations on data and time in this format
console.log(myDate.getTime()); // convert date to miliseconds format

let newDate = new Date();

console.log(newDate.getMonth());
console.log(newDate.getFullYear());

// Date time customisation 
// console.log(newDate.toLocaleString("default", {
    
// }));


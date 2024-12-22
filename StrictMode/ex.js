"use strict";

const x = 10;
console.log(x);


let obj = {};
Object.defineProperty(
    obj,
    "x",
    {value:3.14, writable: false}
);

obj["s"] = "sdf";
console.log(obj);

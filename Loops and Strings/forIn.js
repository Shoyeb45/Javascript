console.log("For in");

const info = {
    name : "Shoyeb",
    id : 1343,
    age : 19
};

for(let i in info){
    console.log("Key:", i, "Value:",info[i]);
}
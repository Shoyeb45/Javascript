//example of object

const info = {
   fullName : "Stephen",
   phoneNum : 9103934043,
   isPass : false
};

type = typeof(info);

console.log(info);
console.log(type);

//Accessing one key of object either by . or []

console.log(info["fullName"]);
console.log(info.isPass);

info.fullName = "Shoyeb" //Reassigining fullName

console.log(info.fullName);
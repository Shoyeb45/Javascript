
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
    name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
},
{
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}
]

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// 1.
const [e, pi, g, humanBodyTemp, waterBoilingTemp] = constants;
console.log(`Euler's Constant = ${e},\nPi = ${pi}\nGravitational constant = ${g},\nHumanBody Temp = ${humanBodyTemp}, Water Boiling constant = ${waterBoilingTemp}`);

// 2.
const [ fin, est, sw, den, nor] = countries;


// 3.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {width, height, area, perimeter} = rectangle;

// 4. 
for(obj of users) {
    let {name, scores, skills, age} = obj;
    console.log(`${name}, ${scores}, [${skills}], ${age}`);
}

// // 5.
// let names = users.filter((obj) => {
//     return 
// });
let name = ""; 
for(obj of users) {
    if(obj.skills.length < 2) {
        name = obj.name;
    }
}

// users.forEach((obj) => {
//     if(obj.skills.length < 2) {
        
//     }
// })
// console.log(name);

// let names = users.map((obj) => {
//     if(obj.skills.length < 2)
//         return obj.name;
// })

// console.log(names);
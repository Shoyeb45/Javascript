const users = {
    Alex: {
      email: 'vishwa@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'imran@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'amrit@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'deepak@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'shabresh@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'anukul@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'anurag@ioi.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// 1. 
let mostSkilledPerson = "";
let mx = 0;
for(key in users) {
    if(users[key].skills.length >= mx) {
        mostSkilledPerson = key;
        mx = users[key].skills.length;
    }
}
console.log(`\n1. Most skilled person is: ${mostSkilledPerson}`);

// 2. 
let countOfLoggedInUser = 0;
let countOfPoints = 0;
for(key in users) {
    if(users[key].isLoggedIn) {
        countOfLoggedInUser = countOfLoggedInUser + 1;
    } 
    if(users[key].points >= 50) {
        countOfPoints = countOfPoints + 1;
    }
}
console.log(`\n2. Total number of logged in users : ${countOfLoggedInUser}\n   Total numbers of user having points greater than or equal to 50 : ${countOfPoints}`);

// 3. 
let mernStackDevs = [];

for(key in users) {
    let arr = users[key].skills;
    if(arr.length >= 4) {
        let skillCount = 0;
        for(skill of arr) {
            if(skill == "MongoDB" || skill == "Express" || skill == "React" || skill == "Node") {
                skillCount++;
            }
        }
        if(skillCount === 4) {
            mernStackDevs.push(key);
        }
    } 
}

console.log(`\n3. Mern stack developers : \n   ${mernStackDevs}`);

// 4. 
users["Shoyeb"] = {
    email: "shoyeb@pwioi.com",
    skills : ["Javascript", "Java", "CPP", "Python", "HTML", "CSS"],
    age : 19,
    isLoggedIn : true,
    points: 30,
};
console.log()
console.log(users.Shoyeb);

// 5.

console.log("\nAll properties of users object");
for(key in users) {
    console.log(key);
}

// 6.
console.log("\nAll values of users object");
for(key in users) {
    console.log(users[key]);
}

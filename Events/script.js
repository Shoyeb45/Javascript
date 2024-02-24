let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     alert("You have made grave mistake")

//     for(i = 1; i<=10; i++) {
//         console.log("Shine!!");
//     }
// }
btn1.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX)
    console.log(e.clientY)
}

let button2 = document.querySelector("#button2")
const handler = () => () => {
    console.log("You are finished.!!!!!!")
}
button2.addEventListener("click", handler)
button2.addEventListener("click", () => {
    console.log("What are you doing?")
})
button2.addEventListener("click", () => {
    console.log("Hey, are you blind.")
})

button2.removeEventListener("click", handler)

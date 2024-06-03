let button = document.querySelector("button");

const addElement = () => {
    let ele = document.createElement("h1");
    ele.innerHTML = "<b>Button is pressed</b>";
    document.body.appendChild(ele);
}

function parv() {
    console.log("Hello");
}
button.addEventListener("click", addElement);
// button.addEventListener("click", addElement);
let btn = document.querySelector("button");


const randomColor = () => {
    let x = Math.floor(Math.random() * 16777216)
    let y = 16777216 - x;

    document.body.style.backgroundColor = `#${x.toString(16)}`;

    let colorCode = document.querySelector("h1");
    colorCode.textContent = `#${x.toString(16)}`
    colorCode.style.color = `#${y.toString(16)}`
    btn.style.color = `#${x.toString(16)}`;
    btn.style.backgroundColor = `#${(y + 1000).toString(16)}`;

    
}
btn.addEventListener("click", randomColor);
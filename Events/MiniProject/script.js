document.body.addEventListener("click", () => {     
    let x = "#" + Math.floor(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = x;
})
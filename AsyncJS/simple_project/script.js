const randomColor = () => {
    const allCode = "0123456789ABCDEF";

    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += allCode[Math.floor(Math.random() * 16)];
    }
    return color;
};

function getComplementaryColor(hex) {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Parse the hex color to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate the complement
    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;
    
    // Convert back to hex and return
    return '#' + ((1 << 24) + (compR << 16) + (compG << 8) + compB).toString(16).slice(1).toUpperCase();
}

const changeColor = () => {
    let color = randomColor();
    let complementtaryColor = getComplementaryColor(color);

    console.log("Changing background color to", color);
    console.log("Changing text color to", color);
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("h3").style.color = complementtaryColor;
};

console.log(randomColor());

const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");

let referce; 

btnStart.addEventListener("click", (event) => {
        referce = setInterval(changeColor, 1000);
    }
)

btnStop.addEventListener("click", (event) => {
        clearInterval(referce);
    }
);
const btn = document.querySelector("#quote-btn");
const quoteArea = document.querySelector("#quote-area");
const url = 'https://dummyjson.com/quotes/random';
const autoGeneBtn = document.querySelector("#automate-quote");
const stopBtn = document.querySelector("#stop-quote");
let setIntervalRef;

btn.addEventListener("click", generateNewQuote);
autoGeneBtn.addEventListener("click", (e) => {
    setIntervalRef = setInterval(automateGeneration, 5000);
});

stopBtn.addEventListener("click", (event) => {
    clearInterval(setIntervalRef);
    console.log("Generating quote stopped");
});

async function automateGeneration() {
    try {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        const text = `"${res.quote}"`;
        const author = res.author;

        quoteArea.innerHTML = `
            <p>${text}</p>
            <p>&nbsp;&nbsp -${author}</p>
        `;
    } catch (error) {
        alert("Some error occured")
        throw new Error("Api call error");
    }
}

async function generateNewQuote(event) {
    try {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        const text = `"${res.quote}"`;
        const author = res.author;

        quoteArea.innerHTML = `
            <p>${text}</p>
            <p>&nbsp;&nbsp -${author}</p>
        `;

    } catch (error) {
        alert("Some error occured");
        console.log(error);
    }
}
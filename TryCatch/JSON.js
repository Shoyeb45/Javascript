

const d = '{"name":"Jasmine, "height":50, "flowercolor": "white"}';
(function some(x) {
    console.log(x);
    try {
        const obj = JSON.parse(d);
    } catch (error) {
        console.log(error.message);
    }
})("Data Transfer");


console.log("string");


function parseJson(JSONObject) {
    try {
        return JSON.parse(JSONObject);
    } catch (error) {
        console.log(error.message);
    }
}

parseJson(d);
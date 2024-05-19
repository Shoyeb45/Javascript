const reverse = (arr) => {
    for(let i = 0; i < arr.length ; i++) {
        arr[i] = arr[arr.length - i - 1];
    }
}

let arr = [1, 3, 5, 10, 12]
reverse(arr);
console.log(arr);
function myForEachLoop(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i]);
    }
}

arr = [3,5,6,3]

myForEachLoop(
    arr,
    (ele) => {
        console.log(ele + 2);
    }
)

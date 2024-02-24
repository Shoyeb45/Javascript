let availBal = 12300;
let withdrawBal = Number(prompt("Enter amount you want to withdraw:"))

function checkBal (wB, aB) {
    if(wB > aB) {
    return false;
    } else {
    return true;
}
}


console.log(checkBal(withdrawBal, availBal));
console.log(withdrawBal > availBal);

if(checkBal(withdrawBal, availBal)) {
    console.log("You don't have enough available balance to withdraw the given amount");
} else {
    let type = prompt("Enter mode of withdrawal(UPI or ATM):");
    if(type == "UPI") { 
        console.log("Hii");
    } else { 
    console.log("Hello");
    }
}

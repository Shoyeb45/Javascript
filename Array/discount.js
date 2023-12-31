console.log("Discount price array");

let ogPrice = [250, 645, 300, 900, 50];
console.log("Original Price\n",ogPrice);
for(let i=0 ; i<ogPrice.length ; i++){
    ogPrice[i] -= 0.1*ogPrice[i];
}

let i=0;
for(let item of ogPrice){
    console.log(`The price of item ${i+1} after discout is ${item}`);
    i++;
}
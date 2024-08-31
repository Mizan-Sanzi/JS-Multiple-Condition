// multi level condition
const price = 2000;

if (price>= 5000){
    // 10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log (payAmount);
}
else if (price>2500) {
// 5% discount
const discount = price * 5/100;
const payAmount = price - discount;
console.log (payAmount);
}
else {
    console.log(price);
}

const age = 62;
const foodPrice = 500;

if (age<12) {
    console.log ("you can eat for free");
}
else if (age >=60) {
    // 50% discount
    const discountPrice = foodPrice*50/100;
    const paymentAmount = foodPrice-discountPrice;
    console.log(paymentAmount);
}
else {
    console.log ("Please pay full amount");
}
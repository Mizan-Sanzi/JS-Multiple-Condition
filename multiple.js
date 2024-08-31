const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true;

// condition && (and)

if (salary>20000 && height>66) {
    console.log("It is ok.");
}
else {
    console.log("Search for another");
}

// condition || (or)

console.log("condition 'or' ")

if (salary>25000 || height>72 || isBCS == false) {
    console.log("It is ok.");
}
else {
    console.log("Search for another");
}

// complex condition

console.log("complex condition");

if ((salary>30000 && hasCar == true) && isBCS == true) {
    console.log ("We are agreed")
}
else{
    console.log("Search for another");
}
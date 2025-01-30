// Task 1
console.log("Task 1")

let prices = [300, 400, 500, 600, 700]  //Declaring array of prices
prices.push (800)                       //Adds price of 800 to the array
prices.shift()                          //Removes the first item in the array

console.log(prices)

//Task 2
console.log("Task 2")

let orders = [14, 17, 20, 25, 30];       //Declaring an array of order
orders[2] += 5;                          //Adding 5 to the third number in the array
let sum = orders.reduce ((acc, score) => acc + score, 0);   //Adding up all the orders

console.log(orders);
console.log("Total order amount:", sum);

//Task 3
console.log("Task 3");

let employee = {                        //Declaring employee object
    name: "John Money",
    role: "Finance Director",
    performanceScore: 84,
    isActive: true,
};
    employee.performanceScore = 94;      //Updating the performance score
    employee.isEligible = true;          //Adding isEligible property

    console.log(employee);


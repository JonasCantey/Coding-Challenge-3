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

    //Task 4
    console.log("Task 4");

    let feedback = [                    //Declaring the feedback array
        {
            customerName: "Randy Marsh",
            feedbackText: "This place rocks!",
            rating: 9.2,
        },
        {
            customerName: "Eric Cartman",
            feedbackText: "This place sucks!",
            rating: 2,
        },
        {
            customerName: "P.C. Principal",
            feedbackText: "This place is ok",
            rating: 5,
        }
    ]
    feedback.push = {                   //Pushed new customer object to array
        customerName:"Kyle Broflovski",
        feedbackText:"My favorite place!",
        rating: 10,
    }
    console.log(feedback);

    //Task 5
    console.log("Task 5")

    let inventory = {                   //Declaring object inventory
        itemName: "Brown Lounging Chair",
        stockCount: 21,
        price: 49.99,
    };

    let stockValue = inventory.stockCount * inventory.price;    //Multiply the stockCount by the price

    console.log(inventory);
    console.log("Total value of stock:", stockValue);

"use strict";
// Basic Types Challenges
// Challenge 1
let rollNumber = 19;
// Challenge 2: Create a variable with the type string and use the addition operator to put two arbitrary words together
let studentNames = "Maruf" + " " + "Mozumder";
console.log(studentNames);
// Challenge 3: Simulate a Type Error by assigning a number  to a string
// let error: string = 30;
// Challenge 4: Create a variable with the type Boolean and assign it to the logical OR operator comparing two values
let truthOrFalse = true || false;
// Challenge 5: Simulate a Type Error by assigning a number to a boolean
// let truthOrDare: boolean = 34;
// Challenge 6:Get the length of an arbitrary string
const isArray = "TypeScript";
console.log(isArray.length);
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Assign a number to a variable with no type annotation, what is the variable type inferred by TypeScript?
*/
let random = 3;
console.log(random);
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an array of numbers
*/
const everybody = [20, 30];
/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
From the previously create array, access the second-indexed item
*/
let everybodyOkay = everybody[1];
/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an array of the two boolean values
*/
const booleanValues = [true, false];
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a string type tuple
*/
const stringTuple = ["Hello", "World"];
/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create a string and number type tuple and access the second item
*/
const mixTuple = ["You", 3];
mixTuple[1];
/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an enum of product names and display it on the console
*/
var ProductsName;
(function (ProductsName) {
    ProductsName[ProductsName["Hello"] = 0] = "Hello";
    ProductsName[ProductsName["From"] = 1] = "From";
    ProductsName[ProductsName["the"] = 2] = "the";
    ProductsName[ProductsName["other"] = 3] = "other";
    ProductsName[ProductsName["side"] = 4] = "side";
})(ProductsName || (ProductsName = {}));
console.log(ProductsName);
// let productName: ProductsName = ProductsName.Hello;
/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an enum of product ids and display it on the console
*/
var ProductId;
(function (ProductId) {
    ProductId[ProductId["id"] = 1] = "id";
    ProductId["name"] = "Kothin";
})(ProductId || (ProductId = {}));
const productId = ProductId.id;
console.log(productId);

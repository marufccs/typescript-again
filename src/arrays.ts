// Array of numbers
let numbers: number[] = [1, 2, 3];
console.log(numbers);

// Array of Strings
let names: string[] = ["Maruf", "Shihab"];
console.log(names);

// Array of numbers and strings
let mix: (number | string)[] = [1, 3, "Maruf", "Mozumder"];
console.log(mix);

// Nested number type array
let nestedNumber: number[][] = [
  [1, 2],
  [3, 5],
];
console.log(nestedNumber);

// Nested string type array
const nestedString: string[][] = [["Maruf"], ["Mozumder"]];
console.log(nestedString);

// Nested String and Number type array
const nestedMix: (number | string)[][] = [[2, 3], ["Chagol"]];

console.log(nestedMix);

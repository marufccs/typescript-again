"use strict";
// Tuple
const student = [1, "Maruf"];
console.log(student);
//Enum
var People;
(function (People) {
    People[People["Samantha"] = 3] = "Samantha";
    People[People["Rakib"] = 4] = "Rakib";
    People[People["Shihab"] = 5] = "Shihab";
})(People || (People = {}));
console.log(People);
let maruf = "Maruf" /* Students.name */;
console.log(maruf);

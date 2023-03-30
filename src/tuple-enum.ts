// Tuple

const student: [number, string] = [1, "Maruf"];
console.log(student);

//Enum
enum People {
  Samantha = 3,
  Rakib,
  Shihab,
}
console.log(People);

// String Enum Types
const enum Students {
  name = "Maruf",
  id = 2,
  surname = "Mozumder",
}

let maruf: Students = Students.name;
console.log(maruf );

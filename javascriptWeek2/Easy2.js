// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

var students = 
[
{name: "Bob",
lastName: "King",
 age: 12
},
{name: "Jerry",
lastName: "Queens",
age: 14
},
{name:"Larry",
lastName: "Richards",
age: 11
}
]

console.log(students[1])

console.log("Hello, my name is " + students[1].name + ' '+ students[1].lastName + " and I'm " + students[1].age + " years old. ")


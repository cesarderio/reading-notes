'use strict';

console.log(hello-world);
// declare a variable called x, assign it value of the value 10

console.log('Hello-World!');


let usersName = prompt('What is your name?')
let message;
console.log(usersName);
message = 'Hi,' + usersName + '!';

if (usersName == 'Kassie'){
    message = 'Hiya Teach!';
} else if (usersName == 'Ben'){message = "Hi Ben!";
} else { message = 'Welcome to my site!'};

document.write(message);

// Notes

let name = 'Raphael'; // String literal
let age = '38'; // Number literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let selectedColor = null;

let person = {
    name: 'raphael',
    age: 38
};

person.name = 'John';

console.log(person);

let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors);
// performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

//calculating a value
function square(number) {
    return number * number;
}
console.log(square);

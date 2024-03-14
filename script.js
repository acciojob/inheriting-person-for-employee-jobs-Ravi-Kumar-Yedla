// complete this js code

class Person{
	constructor(name,age)
	this.name=name;
	this.age=age;
	greet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old.`)
	}
}
class Emplayee extends Person{
	constructor(name,age,jobTitle);
	jobGreet(){
console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`)		
	}
}


// function Person(name, age) {
	
// }

// function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

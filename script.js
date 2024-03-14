function Person(name, age) {
	this.pername=name;
	this.pernage=age;
	greet(){
		console.log(Hello, my name is ${this.name}, I am ${this.age}years old.)
	}
}
function Employee(name, age,jobTitle) {
	this.empname=name;
	this.empage=age;
	this.empjobtitle=jobTitle;
	jobGreet(){
		console.log(Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
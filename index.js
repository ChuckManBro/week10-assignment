'use strict';
/*

WEEK 10 CODING ASSIGNMENT

*/

// Starter Variables
const roster = [
	{ name: 'John Doe', phone: '(208) 123-1234', skydives: 698, weight: 155, paid: true },
	{ name: 'George Bush', phone: '(208) 321-4321', skydives: 5, weight: 170, paid: false },
]; //TODO - remove sample objects
const inputName = document.querySelector('#inputName');
const inputPhone = document.querySelector('#inputPhone');
const inputSkydives = document.querySelector('#inputSkydives');
const inputWeight = document.querySelector('#inputWeight');
const checkPaid = document.querySelector('#checkPaid');
const btnAppend = document.querySelector('#btnAppend');

// Class for New Students
class Student {
	constructor(name, phone, skydives, weight, paid) {
		this.name = name;
		this.phone = phone;
		this.skydives = skydives;
		this.weight = weight;
		this.paid = paid;
	}
}

// Append Button Action
btnAppend.addEventListener('click', function () {
	roster.push(
		new Student(
			inputName.value,
			inputPhone.value,
			inputSkydives.value,
			inputWeight.value,
			checkPaid.checked
		)
	);
	console.log(`Append button clicked`);
	console.log(roster);
	inputName.value = null;
	inputPhone.value = null;
	inputSkydives.value = null;
	inputWeight.value = null;
	checkPaid.checked = false;
});

// Render Roster Table

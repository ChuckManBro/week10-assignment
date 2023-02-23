'use strict';
/*

WEEK 10 CODING ASSIGNMENT
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
- A Bootstrap styled table representing your choice of data.
- A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

*/

// Starter Variables
const roster = [];
const rosterTable = document.querySelector('#rosterTable');
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

// When 'append' button is clicked
function btnClickAppend() {
	// only IF Name entry is not empty
	if (inputName.value !== '') {
		// Push new Student object into Roster Array
		roster.push(
			new Student(
				inputName.value,
				inputPhone.value,
				inputSkydives.value,
				inputWeight.value,
				checkPaid.checked
			)
		);

		// Render Roster Table
		renderRosterTable();

		// Clear all input fields
		inputName.value = null;
		inputPhone.value = null;
		inputSkydives.value = null;
		inputWeight.value = null;
		checkPaid.checked = false;
	}
}

// Render Roster Table
function renderRosterTable() {
	// Clear previous html roster table
	rosterTable.innerHTML = null;

	for (let i = 0; i < roster.length; i++) {
		//new row with unique id
		const newRow = document.createElement('tr');
		newRow.id = `rosterRow${i}`;
		rosterTable.appendChild(newRow);
		const currentRow = document.querySelector(`#rosterRow${i}`);

		//new name td
		const newName = document.createElement('td');
		newName.innerHTML = roster[i].name;
		currentRow.appendChild(newName);

		//new phone td
		const newPhone = document.createElement('td');
		newPhone.innerHTML = roster[i].phone;
		currentRow.appendChild(newPhone);

		//new skydives td
		const newSkydives = document.createElement('td');
		newSkydives.innerHTML = roster[i].skydives;
		currentRow.appendChild(newSkydives);

		//new weight td
		const newWeight = document.createElement('td');
		newWeight.innerHTML = roster[i].weight;
		currentRow.appendChild(newWeight);

		//new paid td
		const newPaid = document.createElement('td');
		//generate Paid button and red row if student has not paid
		if (roster[i].paid === false) {
			newPaid.innerHTML = `<button class="btn btn-sm btn-primary" onclick="markAsPaid(${i})">Mark as Paid</button>`;
			currentRow.classList.add('table-danger');
		}
		currentRow.appendChild(newPaid);
	}
}

// Function for when 'mark as paid' button is clicked
function markAsPaid(index) {
	roster[index].paid = true;
	renderRosterTable();
}

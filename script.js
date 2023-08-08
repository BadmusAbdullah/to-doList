const inputBox = document.getElementById('input_con');
const listBox = document.getElementById('list-container');
function addTask() {
	if (inputBox.value === '') {
		alert('You must write a list!');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listBox.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	inputBox.value = '';
	storeData();
}

listBox.addEventListener(
	'click',
	function (e) {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('selected');
			storeData();
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove();
			storeData();
		}
	},
	false
);

function storeData() {
	localStorage.setItem('data', listBox.innerHTML);
}
function displayTask() {
	listBox.innerHTML = localStorage.getItem('data');
}
displayTask();

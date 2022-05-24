const submitBtn = document.getElementsByTagName('input');

const ratingBtns = document.querySelectorAll('.num');
const rating = document.getElementsByClassName('.score');
let score = '';

function valueSender() {
	let a = score;
	localStorage.setItem('myValue', a);
	window.location.href = 'ty.html';
}

for (let btn of ratingBtns) {
	btn.addEventListener('click', e => {
		e.target.classList.add('selected');
		score = e.target.innerText;
		rating.innerText = score;
	});
}

submitBtn.addEventListener('click', () => {
	// location.href = 'ty.html';
	valueSender();
});

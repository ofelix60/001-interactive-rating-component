const submitBtn = document.getElementById('button');
const ratingBtns = document.querySelectorAll('.num');
let score = '';

function valueSender() {
	let a = score;
	localStorage.setItem('myValue', a);
}

for (let btn of ratingBtns) {
	btn.addEventListener('click', e => {
		e.target.classList.add('selected');
		score = e.target.innerText;
	});
}

submitBtn.addEventListener('click', () => {
	valueSender();
	location.href = 'ty.html';
});

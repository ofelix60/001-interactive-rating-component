let score = document.getElementsByClassName('.score');

let b = localStorage.getItem('myValue');
let resetValue = '';

score.innerText = b;

localStorage.setItem('myValue', resetValue);

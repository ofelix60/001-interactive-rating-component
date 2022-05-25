const rating = document.getElementById('score');
let score = localStorage.getItem('myValue');

rating.innerText = score;
localStorage.clear();

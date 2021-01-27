const winner = localStorage.getItem('winner');
const change = document.querySelector ('.winner');
change.innerText = `${winner} is the new chanclor`;
console.log(winner);
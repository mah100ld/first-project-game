const winner = localStorage.getItem('winner');

if (winner === null) {

const change = document.querySelector ('.winner');
change.innerText = `If Söder wants it to be, he's gonne be it. Thats how it is. Sorry guys.`;
} else {

const change = document.querySelector ('.winner');
change.innerText = `${winner} will be the new Kanzler`;
}

localStorage.clear();
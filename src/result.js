const winner = localStorage.getItem('winner');

if (winner === null) {

const change = document.querySelector ('.winner');
change.innerText = `If Söder wants it to be, he's gonne be it. Thats how it is. Sorry guys.`;
} else {

const change = document.querySelector ('.winner');
change.innerText = `${winner} will be the new Kanzler`;

}


if (winner === "Söder") {
    document.querySelector(".winner-image").src = "./src/images/soeder.png"
} else if (winner === "Laschet") {
    document.querySelector (".winner-image").src = "./src/images/Laschet.png"
}


console.log (document.querySelector(".winner-image"));

localStorage.clear();
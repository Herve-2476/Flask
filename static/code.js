// let input = document.getElementById("input");
// input.addEventListener("keypress", analyze);

// // function analyze() { if (input.value == "Santa Claus") { alert("gagné") } }

// function analyze(event) { alert("ok") };


let input = document.querySelector('input');

input.addEventListener('keyup', (e) => logKey());

function logKey(e) {
    var x = document.getElementById("saisie").value;
    if (
        x == "Santa Claus") { document.getElementById("lecteur").play() } else { document.getElementById("lecteur").pause() };
}

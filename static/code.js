// let input = document.getElementById("input");
// input.addEventListener("keypress", analyze);

// // function analyze() { if (input.value == "Santa Claus") { alert("gagné") } }

// function analyze(event) { alert("ok") };

let input = document.querySelector("input");
const image = document.querySelector("img");

input.addEventListener("keyup", (e) => logKey());

function logKey(e) {
  var x = document.getElementById("saisie").value;
  if (x.toLowerCase() == "santa claus") {
    document.getElementById("lecteur").play();
    image.src = "static/champagne.jpg";
  } else {
    document.getElementById("lecteur").pause();
  }
}

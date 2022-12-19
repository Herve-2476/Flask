const input = document.querySelector("input");
const image = document.querySelector("img");
let click_number = 1;

input.addEventListener("keyup", (e) => logKey());
image.addEventListener("click", clickOnQR);

function logKey(e) {
  var x = input.value;
  if (x.toLowerCase() == "santa claus") {
    document.getElementById("lecteur").play();
    // document.querySelector("label").style.visibility = "hidden";
    // input.style.display = "none";
    document.querySelector("span").style.display = "none";
    document.querySelector("video").style.display = "inline";
    document.querySelector("video").play();
  } else {
    document.getElementById("lecteur").pause();
  }
}

function clickOnQR() {
  if (click_number >= 3) {
    image.style.display = "none";
    // document.querySelector("label").style.visibility = "visible";
    // input.style.display = "inline";
    document.querySelector("span").style.display = "inline";
  } else {
    click_number++;
  }
}

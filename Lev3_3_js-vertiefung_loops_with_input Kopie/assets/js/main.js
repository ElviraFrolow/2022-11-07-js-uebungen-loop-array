const userInput = document.getElementById("userInput");
const button = document.getElementById("submit");
const output = document.getElementById("output");

let o = "";

button.addEventListener("click", () => {
  event.preventDefault();
  for (let i = 1; i <= Number(userInput.value); i++) {
    o += "o";
    zero = "0";
    let j = 1;
  }
  if (userInput.value == 0) {
    document.getElementById("output").innerHTML = "ERROR";
  } else document.getElementById("output").innerHTML = `L${o}P`;
});

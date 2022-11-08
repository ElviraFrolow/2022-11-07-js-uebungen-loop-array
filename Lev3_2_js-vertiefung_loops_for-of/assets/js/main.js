let numArr = [5, 22, 15, 100, 55];

function divideElement(divideMe) {
  for (let i = 0; i < divideMe.length; i++) {
    for (let j = 1; j < divideMe[i]; j++)
      if (!(divideMe[i] % j) && j !== 1) {
        document.write(
          `<p>${divideMe[i]} lässt sich durch ${j}teilen! Das Ergebnis ist ${
            divideMe[i] / j
          }</p>`
        );
      }
  }
}
divideElement(numArr);

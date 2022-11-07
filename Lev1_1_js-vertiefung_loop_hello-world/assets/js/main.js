let num = "Hello World ";
for (let i = 1; i <= 10; i++) {
  console.log(num + i);
}

// // Loooooooops
// // for loop

// // for(statement1; statement2; statement3){
// // code
// // }

// // for(start/before; condition; step/after){
// // code
// // }

// // In der Konsole sollen die Zahlen 1 bus 7 ausgegeben werden.
// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)
// // console.log(6)
// // console.log(7)

// for (let i = 1; i <= 7; i++) {
//     console.log(i);
// }

// console.log("%c Aufgabe 1", "color: tomato")
// // 1-100
// // 1+2+3+4+5....99+100
// // Lasst euch das Ergebnis in der Konsole ausgeben

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// console.log("%c Aufgabe 2", "color: tomato")
// // Aufgabe 2: 8 Stars
// // Die Konsole soll 5 * 8 Sternchen ausgeben
// // ********
// // ********
// // ********
// // ********
// // ********

// for (let i = 0; i < 5; i++) {
//     console.log("********");
// }

// console.log("%c Aufgabe 3", "color: tomato")
// // Aufgabe 3: the tree
// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let stars = '';

// for (let i = 0; i < 6; i++) {
//     console.log(i);
//     // neuer wert stars = alter wert stars + "*";
//     // langschreib variante
//     // stars = stars + "*";
//     // stars = alter value + something
//     // kurzschreib variante
//     stars += '*';
//     console.log(stars);
// }

// console.log("%c Aufgabe 4", "color: tomato")
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// for (let a = 5; a <= 10; a++) {
//     console.log(a);
// }

// console.log("%c Aufgabe 5", "color: tomato")
// // 50
// // 49
// // 48
// // 47
// // 46
// // 45

// for (let i = 50; i >= 45; i--) {
//     console.log(i);
// }

// console.log("%c Aufgabe 6", "color: tomato")
// // ***************************************** --> 30 Sternchen
// // *****************************************
// // *****************************************

// for (let i = 0; i < 3; i++) {

//     let display = "";
//     for (let j = 0; j < 29; j++) {
//         display += "*";
//     }
//     console.log(display);
// }

// console.log("%c BREAK BREAK BREAK", "color: tomato; background-color: gold;")

// let country = ['france', 'germany', 'spain', "indien"];
// // FRANCE
// // GERMANY
// // SPAIN
// // console.log(country[0]);

// for (let i = 0; i < country.length; i++) {
//     console.log(i);
//     console.log(country[i].toUpperCase());
// }

// console.log("%c for of", "color: tomato")
// // for of
// // mit ES6 gekommen, kurz & bündig ohne zusätzliche variablen und kann über alles iterieren was einen index hat
// // ähnlich zu forEach
// // wann nutze ich was ? forEach wenn ich eine callback function benötige, ansonsten ist for of etwas eleganter

// let numbers = [2, 3, 4, 5, 6];

// for (let i of numbers) {
//     console.log(i);
// }

// let text = "text";
// for (let e of text) {
//     console.log(e);
// }

// console.log("%c Aufgabe 7", "color: tomato")
// let arr = [10, 20, 30]
// // 20
// // 40
// // 60

// // for loop
// console.log("%c for loop", "color: tomato")
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2);
// }
// // for of
// console.log("%c for of", "color: tomato")
// for (let i of arr) {
//     console.log(i * 2)
// }
// // forEach
// console.log("%c forEach", "color: tomato")
// arr.forEach((elt) => console.log(elt * 2))

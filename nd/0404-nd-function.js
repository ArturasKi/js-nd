// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.

function suma(a, b) {
    return (a + b);
}
const s1 = suma(2, 13);
console.log(s1);
console.log('--------------')

// 2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

function kintamieji(a, b) {
    if (a > b) {
    return (`Pirmas skaicius ${a} yra didesnis.`);
    } else if (a < b) {
    return (`Antras skaicius ${b} yra didesnis.`);
    } else if (a === b) {
    return (`Pirmas(${a}) ir antras(${b}) skaiciai yra lygus.`)
    }  
}
let k1 = kintamieji(17, 12);
console.log(k1);

k1 = kintamieji(20, 30);
console.log(k1);

k1 = kintamieji(25, 25);
console.log(k1);
console.log('--------------')

// 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.

function keliamieji(a) {
    if (a % 4 === 0 && a % 400 === 0 || a % 100 !== 0) {
    return (`${a} metai yra keliamieji.`)
    } else {
    return (`${a} metai yra paprastieji.`)
    }
}
m1 = keliamieji(2022);
console.log(m1);
console.log('--------------')

// 4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.

function kvadratas(a) {
    return (a * a);
}
const s2 = kvadratas(7);
console.log(s2);
console.log('--------------')

// 5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.

function suma(a) {
    if (a > 1) {
    let skaicius = 0
    for (i = 1; i <= a; i++) {
    skaicius += i;
    } return console.log(skaicius);
}
}
let s3 = suma(6);
console.log('--------------')
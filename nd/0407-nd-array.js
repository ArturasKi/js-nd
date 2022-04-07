// 1. Sukurti masyą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.

console.log('---------------[1]----------------')
arr = [];
while (arr.length < 20) {
    arrRandom = Math.floor(Math.random() * 20) + 1;
    arr.push(arrRandom);
}
console.log(arr);

// // 2 budas
// arr = new Array(20).fill();
// arrRandom = arr.map(() => Math.floor(Math.random() * 20) + 1);

// console.log(arrRandom);
console.log('---------------[2]------------------')

// 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

// start = 40;
// end = 60;

// arr = [];
// while () {
//     arrRandom = Math.floor(Math.random(60 - 40 + 1));
//     arr.push(arrRandom);
// }
// console.log(arr);
console.log('---------------[3]------------------')

// 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.

// arr = [];
// arr.length = 0;
// while (arr.length < 15) {

//     arrRandom = Math.floor(Math.random() * 43) + 5;
//     arr.push(arrRandom);
// }
// console.log(arr);

console.log('---------------[4]------------------')

// 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20. 

arr = new Array(20).fill('D, E, F, G, H');
console.log(arr);

arr = [];
raides = 'D, E, F, G, H'
while (arr.length < 100) {
    
    raidesSplit = raides.split('')
    arrRandom = Math.floor(Math.random() * 10) + 1;
    arr.push(arrRandom);
    }
console.log(raidesSplit);



console.log('---------------[5]------------------')

// 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.

// arr = [];
// while (arr.length < 100) {

console.log('---------------[6]------------------')

// 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.

// arr = new Array(20).fill();

arr = [];
while (arr.length < 20) {
    arrRandom = Math.floor(Math.random() * 40) + 11;
    if (arr.indexOf(arrRandom) === -1) arr.push(arrRandom);
}

console.log(arr);



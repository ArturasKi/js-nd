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


// 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
// console.log('---------------[2]------------------')
// start = 40;
// end = 60;

// arr = [];
// while () {
//     arrRandom = Math.floor(Math.random(60 - 40 + 1));
//     arr.push(arrRandom);
// }
// console.log(arr);


// 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
console.log('---------------[3]------------------')

arr = [];
minLength = 10;
maxLength = 15;
maxNum = 5;
minNum = 47;

arr.length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
arr = Array.from({length: arr.length}, () => Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));

function maxValue(arr) {
    return arr.reduce((max, val) => max > val ? max : val);
  }

maxReiksme = maxValue(arr);

console.log(arr);
console.log(`Didžiausias skaičius masyve: ${maxReiksme}.`);

// 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20. 
console.log('---------------[4]------------------')

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





// 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
// console.log('---------------[5]------------------')
// arr = [];
// while (arr.length < 100) {


// 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
console.log('---------------[6]------------------')
// arr = new Array(20).fill();

arr = [];
while (arr.length < 20) {
    arrRandom = Math.floor(Math.random() * 40) + 11;
    if (arr.indexOf(arrRandom) === -1) arr.push(arrRandom);
}

console.log(arr);



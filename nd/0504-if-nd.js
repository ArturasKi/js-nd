// 1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log().

console.log('---------------- 1 -----------------');

function rand1(a, b) {
    if (a < b && a === 0 || a < b && b === 0 ||
        a > b && b === 0 || a > b && a === 0) {
        return `Dalyba is 0 negalima.`;
    } 
    else if(a > b) {
        return `Padalinta reiksme: ${a / b}.`;
    }
    else if (a < b) {
        return `Padalinta reiksme: ${b / a}.`;
    } 
    else return `Abi reiksmes yra lygios.`
}

const a = Math.floor(Math.random() * 5);
const b = Math.floor(Math.random() * 5);

console.log(a);
console.log(b);

console.log(rand1(a, b));

// 2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.

console.log('---------------- 2 -----------------');

function rand2(a, b, c) {
    if (a < b && b > c && a > c || a > b && b < c && a < c) {  // b > a > c; c > a > b
        return a;
    }
    else if (a > b && a > c && b > c || a < b && a < c && b < c) { // a > b > c; c > b > a
        return b;
    }
    else if (a > b && a > c && b < c || a < b && a < c && b > c) { // a > c > b; b > c > a
        return c;
    } else if (a === b || a === c || b === c) {
        return `Yra vienodos reiksmes.`
    }
} 

const a1 = Math.floor(Math.random() * 25);
const b1 = Math.floor(Math.random() * 25);
const c1 = Math.floor(Math.random() * 25);

console.log(a1);
console.log(b1);
console.log(c1);
console.log(`Vidurine reiksme:`);
console.log(rand2(a1, b1, c1));


// 3. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite rand() funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().

console.log('---------------- 3 -----------------');

function rand3(a, b, c) {
    if(a + b > c || a + c > b || b + c > a) {
        return `Trikampio krastines: ${a}, ${b}, ${c}.`;
    }
}

const a2 = Math.floor(Math.random() * 11) + 1;
const b2 = Math.floor(Math.random() * 11) + 1;
const c2 = Math.floor(Math.random() * 11) + 1;
console.log(a2);
console.log(b2);
console.log(c2);

console.log(rand3(a2, b2, c2));

// 4. Sukurkite keturis kintamuosius ir rand() funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log().

console.log('---------------- 4 -----------------');

function rand4(a, b, c, d) {
    const arr = Array.from([a, b, c, d]);
    const arr0 = arr.filter(item => item === 0).length;
    const arr1 = arr.filter(item => item === 1).length;
    const arr2 = arr.filter(item => item === 2).length;
    return `Nuliai: ${arr0}, Vienetai: ${arr1}, Dvejetai: ${arr2}`;
}

const a3 = Math.floor(Math.random() * 3);
const b3 = Math.floor(Math.random() * 3);
const c3 = Math.floor(Math.random() * 3);
const d3 = Math.floor(Math.random() * 3);
console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);

console.log(rand4(a3, b3, c3, d3));

// 5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius, didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius.

console.log('---------------- 5 -----------------');

function rand5(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

for(i = 0; i < 3; i++) {
    let value = rand5(-10, 10);
    if(value > 0) {
        console.log(`-${value}-`);
    }
    else if (value < 0) {
        console.log(`+${value}+`);
    }
    else if (value === 0) {
        console.log(`*${value}*`);
    }
}

// 6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000.

console.log('---------------- 6 -----------------');

function rand5(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let zvakiuKiekis = rand5(5, 3000);

if(zvakiuKiekis > 1000) {
    console.log(`Zvakiu kiekis: ${zvakiuKiekis}, kaina: ${zvakiuKiekis * 0.97} EUR.`)
}
else if(zvakiuKiekis > 2000) {
    console.log(`Zvakiu kiekis: ${zvakiuKiekis}, kaina: ${zvakiuKiekis * 0.96} EUR.`)
} else console.log(`Zvakiu kiekis: ${zvakiuKiekis}, kaina: ${zvakiuKiekis} EUR.`);

// 7. Naudokite funkcija rand(). Sukurkite tris kisntamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

console.log('---------------- 7 -----------------');

function rand5(min, max) {
    const arrayLength = 3;
    arr = Array.from(Array(arrayLength)).map(x => Math.floor(Math.random() * (max - min) + min));
    vidurkis = (arr[0] + arr[1] + arr[2]) / 3;
    
    console.log(arr);
    if((arr[0] < 10 && arr[1] < 10 && arr[2] < 10) || (arr[0] > 90 && arr[1] > 90 && arr[2] > 90)) {
        return vidurkis6 = 0;
    } 
    else if((arr[0] < 10 && arr[1] < 10) || (arr[0] > 90 && arr[1] > 90)) {
        return vidurkis3 = arr[2];
    } 
    else if((arr[0] < 10 && arr[2] < 10) || (arr[0] > 90 && arr[2] > 90)) {
        return vidurkis4 = arr[1];
    } 
    else if((arr[1] < 10 && arr[2] < 10) || (arr[1] > 90 && arr[2] > 90)) {
        return vidurkis5 = arr[0];
    } 
    if(arr[0] < 10 || arr[0] > 90) {
        return vidurkis0 = (arr[1] + arr[2]) / 2;
    } 
    else if(arr[1] < 10 || arr[1] > 90) {
         return vidurkis1 = (arr[0] + arr[2]) / 2;
    } 
    else if(arr[2] < 10 || arr[2] > 90) {
         return vidurkis2 = (arr[0] + arr[1]) / 2;
    } 
    else return vidurkis;
} 

console.log(rand5(0, 100));







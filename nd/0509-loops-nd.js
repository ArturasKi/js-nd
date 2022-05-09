/* 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
A. Paskai iuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log
atspauzdinkite sumos kintamąjį;
B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami
console.log;
C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį
atspauszdinkite pasinaudodami console.log;
D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale
pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo
tipo kintąmąjį pasinaudodami console.log; */

console.log('---------- 1 ----------');

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//A
const b = rand(5, 25);
const c = rand(5, 25);
const d = rand(5, 25);

const sumele = b + c + d;
console.log(`Suma = ${sumele}`);

//B
const stringai = '' + b + c + d;
console.log(stringai);

//C
const darStringai = '' + b + ' ' + c + ' ' + d;
console.log(darStringai);

//D
const velStringai = '' + b + ' ' + c + ' ' + d + ' ' + sumele; 
console.log(velStringai);


// 2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

console.log('---------- 2 ----------');

const a = rand(5, 10);

console.log(a);

// 3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

console.log('---------- 3 ----------');

const hello = 'Labas';

for(i = 0; i < 5; i++) {
    console.log(hello);
}

// 4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

console.log('---------- 4 ----------');

for(i = 0; i < 7; i++) {
    console.log(a);
}

// 5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

console.log('---------- 5 ----------');

for(i = 1; i <= a; i++) {
    console.log(a);
}

// 6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

console.log('---------- 6 ----------');

for(i = 1; i <= a; i++) {
    if(a > 7) {
    console.log(a);
    } else break;
}

/* 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo
ribų ir jį atspauzdinkite;
B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam,
kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log
už ciklo ribų;
C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių
darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių
darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje
generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį
atspausdinkite pasinaudodami console.log; */

console.log('---------- 7 ----------');

let kintamasis = 0;
let kSuma = 0;

for(i = 0; i < 5; i++) {
    
    kintamasis = rand(10, 20); //A
    console.log(kintamasis);
    
    kSuma += kintamasis;
    
} console.log(`Suma: ${kSuma}`); //B






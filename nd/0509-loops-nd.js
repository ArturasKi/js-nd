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
    return Math.floor(Math.random() * (max - min + 1) + min);
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
let stringoTipas = '';
let stringoKintamasis = '';

for (i = 0; i < 5; i++) {
    
    kintamasis = rand(10, 20); //A
    
    kSuma += kintamasis; //B

    stringoTipas += '' + kintamasis + ' '; //C

    stringoKintamasis = stringoTipas + kSuma; //D

} 
console.log(kintamasis); //A
console.log(`Suma: ${kSuma}`); //B
console.log(stringoTipas); //C
console.log(stringoKintamasis); //D

/* 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo
ribų ir jį atspauzdinkite;
B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami
console.log už ciklo ribų jam pasibaigus;
C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami
(neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam,
kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log
už ciklo ribų;
D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame
suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir
atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek
nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo
ribų jam pasibaigus.
F. Ciklą iš dalies B kartokite tol, kol to ciklo iteracijų kiekis bus didesnis nei 20
(vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą
atspauzdinkite pabaigoje. */

console.log('---------- 8 ----------');

let p = 0;
let iteracijos = 0;
let reiksmiuSuma = 0;
let atmestosReiksmes = 0;
let lyginesReiksmes = 0;
let nelyginesReiksmes = 0;


do {

    p = rand(10, 25);
    console.log(p); //A
    iteracijos++; //B
    
    if (p <= 18) {
        reiksmiuSuma += p; //C
    } 
    
    if (p > 18) {
        atmestosReiksmes++; //D
    }

    if (p % 2 === 0) {
        lyginesReiksmes++; //E
    }

    if (p % 2 !== 0) {
        nelyginesReiksmes++; //E
    }


} while (p >= 12);

console.log(`Padarytos ${iteracijos} iteracijos.`); //B
console.log(`Reiksmiu suma: ${reiksmiuSuma}.`); //C
console.log(`Atmestos ${atmestosReiksmes} reiksmes.`); //D
console.log(`${lyginesReiksmes} lygines reiksmes ir ${nelyginesReiksmes} nelygines reiksmes.`); //E


/* 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo
sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai
iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami
console.log už ciklo ribų jam pasibaigus;
B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą,
bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš
eilės; */

console.log('---------- 9 ----------');

let n = 0;
let n1 = 0;

do {

    n = rand(5, 10);
    console.log(n);

    do {

        n1 = rand(5, 10);
        console.log(`Ciklas cikle: ${n1}`);
        
    } while (n1 !== 5)


} while (n !== 5)





/* 10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: laimėtojo vardas”. Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų. */






// function sameCase(a, b){
  
//     if (a == /^[a-z]+$/i.test(a) || b == /^[a-z]+$/i.test(b)) {
//        return -1; 
//     }
//     if (a.toLowerCase() == a && b.toLowerCase() == b) {
//       return 1;
//     }
//     if (a.toUpperCase() == a && b.toUpperCase() == b) {
//       return 1;
//     }
//     if (a.toLowerCase() != a || b.toLowerCase() != b || a.toUpperCase() != a || b.toUpperCase() != b) {
//         return 0;
//     }
// }

// console.log(sameCase('H', ':')); 
// console.log(sameCase('0', '?')); 
// console.log(sameCase('a', 'b'));
// console.log(sameCase('C', 'T'));
// console.log(sameCase('c', 'A'));
// console.log(sameCase('G', 'a'));
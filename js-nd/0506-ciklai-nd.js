function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
 }

// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

console.log('-------- 1 ---------')

for(i = 0; i < 5; i++) {
    console.log('Labas');
}

// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

console.log('-------- 2 ---------')

let skaicius = 0;

for(i = 0; i < 5; i++) {
    console.log(skaicius);
    skaicius++;
}

// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

console.log('-------- 3 ---------')

let skaicius1 = 0;

for(i = 0; i < 5; i++) {
    console.log(skaicius1);
    skaicius1 += 10;
}

// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

console.log('-------- 4 ---------')
    
let skaicius2 = 49;

for(i = 0; i < 5; i++) {
    console.log(skaicius2);
    skaicius2++;
}

// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

console.log('-------- 5 ---------')

let skaicius3 = 4;

for(i = 4; i >= 0; i--) {
    console.log(skaicius3);
    skaicius3--;
}

// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

console.log('-------- 6 ---------')

let skaicius4 = 0;

for(i = 0; i < 5; i++) {
    console.log(skaicius4);
    skaicius4 += 2;
}

// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

console.log('-------- 7 ---------')

for(i = 0; i < 5; i++) {
    let skaicius5 = 0;
    for(j = 0; j < Math.floor(Math.random() * 10); j++) { 
        skaicius5++;
    } 
    console.log(skaicius5);
}

// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

console.log('-------- 8 ---------')

let randomSkaicius = 0;

while(randomSkaicius !== 5) {
    randomSkaicius = rand(0, 10);
    console.log(randomSkaicius);
}

// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

console.log('-------- 9 ---------')

let skaiciuSuma = 0;

while(skaiciuSuma < 100) {
    let randomSkaic = rand(0, 10);
    skaiciuSuma += randomSkaic;
    console.log(`Atsitiktinis sk: ${randomSkaic} -> suma: ${skaiciuSuma}`);
}

// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

console.log('-------- 10 ---------')

let randSk = 0;
let cikluSk = 0;

while(randSk !== 5 && randSk !== 7) {
    randSk = rand(0, 10);
    console.log(randSk);
    cikluSk++;
    
} console.log(`Prasisuko: ${cikluSk} ciklai/u.`);

// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

console.log('-------- 11 ---------')

let ciklai = 0;
let sumaSk = 0;

while(ciklai < 11 || sumaSk < 20) {
    betkoksSk = rand(0, 10);
    sumaSk += betkoksSk;
    ciklai++;
    console.log(`${betkoksSk} -> ${ciklai} ciklai, suma ${sumaSk}.`);
}

// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

console.log('-------- 12 ---------')

let cycle = true;
let count = 0;

do {
    let sk = rand(0, 10);
    console.log(sk);
    if (sk % 2 !== 0) {
        count++;  
    } 

    if (count === 3) {
        cycle = false;
    }
} while (cycle);

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

console.log('-------- 13 ---------')

let a = 0;
let b = 0;

while(true) {
    a = rand(0, 10);
    b = rand(0, 10);
    if(a !== b) {
        console.log(a, b);
    } else break;
}

// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

console.log('-------- 14 ---------')

let sumaX = 0;
let sumaY = 0;

while(sumaX < 100 || sumaY < 100) {
    x = rand(0, 10);
    y = rand(0, 10);
    sumaX += x;
    sumaY += y;
console.log(`x = ${x} = ${sumaX}, y = ${y} = ${sumaY}`);
}

// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių (skaičiai atskiruose stulpeliuose).

console.log('-------- 15 ---------')

let count1 = 0;
let count2 = 0;

do {
    let sk1 = rand(0, 10);
    let sk2 = rand(0, 10);

    console.log(sk1, sk2);

    if (sk1 % 2 !== 0) {
        count1++;  
    } 
    if (sk2 % 2 !== 0) {
        count2++;  
    } 
    if (count1 >= 3 && count2 >= 3) {
        break;
    }
} while (count1 !== 3 || count2 !== 3);










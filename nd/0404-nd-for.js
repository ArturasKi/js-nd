// 1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

for (i = 0; i < 5; i++) {
    console.log('Labas');
}
console.log('---------------')
// 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

let reiksme = 0;
for (i = 0; i <= 4; i++) {
    console.log(reiksme);
    reiksme++;
}
console.log('---------------')
// 3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

reiksme = 0;
for (i = 0; i <= 4; i++) {
    console.log(reiksme);
    reiksme += 10;
}
console.log('---------------')
// 4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

for (i = 49; i <= 53; i++) {
    console.log(i);
}
console.log('---------------')
// 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).

for (i = 0; i < 10; i++) {
    console.log(i);
    i++;
}
console.log('---------------')
// 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

for (i = 0; i <= 20; i++) {
    if (i % 3 !== 0) {
    console.log(i);
    }
}

// 7. 


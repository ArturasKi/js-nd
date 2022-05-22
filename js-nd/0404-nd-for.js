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

for (i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()*10));
}
console.log('---------------')

// 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

for (i = 0; i <= 20; i++) {
    if (i % 3 !== 0) {
    console.log(i);
    }
}
console.log('---------------')

// 7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

let skaicius = 7;
let daugiklis = 0;
for (i = 1; i <= 10; i++) {
    daugiklis++;
    sandauga = skaicius * daugiklis;
    console.log(sandauga);
}
console.log('---------------')

// 8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.

let colisCentimetrais = 2.54;
let colis = 0;
for (i = 1; i <= 15; i++) {
    colis++;
    centimetrai = colis * colisCentimetrais;
    console.log(`${colis} inch --> ${centimetrai} cm`);
}
console.log('---------------')

// 9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.

let indelis = 100;
let palukanos = 0;
let metai = 1;
for (i = 1; i <= 20; i++) {
    palukanos += 0.02 * indelis;
    console.log(`Metai: ${metai++} / Palukanos: ${palukanos}e / Indelis: ${indelis + palukanos}e`);
}
console.log('---------------')

// 10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.

let erosMetai = 0;
for (i = 0; i <= 2022; i++) {
    if ((erosMetai % 4 === 0) && (erosMetai % 100 !== 0) || (erosMetai % 400 === 0)) {
    console.log(erosMetai);
    }
    erosMetai++;
} 

/* Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1.Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
4. Išvesti sąrašo tipo kintamųjų ilgius
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus
*/

// [1]
const a = 45;
const b = 31;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// [2]
console.log('-------------------------');
const kintamasisVienas = 'Laba diena';
const kintamasisDu = 'Labas vakarelis';
console.log(kintamasisVienas.length);
console.log(kintamasisDu.length);

// [3]
console.log('-------------------------');
if (kintamasisVienas.length > kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (kintamasisVienas.length < kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (kintamasisVienas.length === kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (kintamasisVienas.length !== kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (kintamasisVienas.length >= kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (kintamasisVienas.length <= kintamasisDu.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// [4]
console.log('-------------------------');
const sarasas = ['Pirmas', 'Antras', 'Trecias', 'Ketvirtas', 'Penktas'];
console.log(sarasas[0].length); 
console.log(sarasas[1].length); 
console.log(sarasas[2].length); 
console.log(sarasas[3].length); 
console.log(sarasas[4].length); 

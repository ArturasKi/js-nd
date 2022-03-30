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

console.log('-------------------------');
const c = 45;
const d = 31;

if (c < d) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------------------');
const e = 15;
const f = 15;

if (e == f) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------------------');
const g = 15;
const h = 18;

if (g == h) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------------------');
const i = 25;
const j = 18;

if (i >= j) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------------------');
const k = 25;
const l = 18;

if (k <= l) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// [2]


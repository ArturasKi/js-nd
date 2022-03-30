/* KINTAMUJU PALYGINIMAS
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

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
const ilgisVienas = kintamasisVienas.length;
const ilgisDu = kintamasisDu.length;
console.log(ilgisVienas);
console.log(ilgisDu);

// [3]
console.log('-------------------------');
if (ilgisVienas > ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgisVienas < ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgisVienas === ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgisVienas !== ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgisVienas >= ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (ilgisVienas <= ilgisDu) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// [4]
console.log('-------------------------');
const sarasas = ['Pirmasis', 'Antroji'];

const pirmas = sarasas[0].length;
const antras = sarasas[1].length;


console.log(pirmas); 
console.log(antras); 
 

// [5]
console.log('-------------------------');
if (pirmas > antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas < antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas === antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas !== antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas >= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (pirmas <= antras) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
console.log('-------------------------');

// PAPILDOMI UZDAVINIAI IS KESTUCIO PAULAVICIAUS

// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras. 

const m = 20;

if (m > 0) {
    console.log('Geras')
} if (m < 0) {
    console.log('Blogas');
}

console.log('-------------------------');

// 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.

const zalia = 1;
const geltona = 2;
const raudona = 3;

let n = geltona;

if (n === 3) {
    console.log('Stop');
} if (n === 2) {
    console.log('Palaukite');
} if (n === 1) {
    console.log('Eiti');
}

console.log('-------------------------');

// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.

// 4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.

let aa = 5;
let bb = 2;

if (aa > bb) {
    console.log(aa - 1), console.log(bb + 1);
} else if (aa < bb) {
    console.log(aa + 1), console.log(bb - 1);
} 
console.log('-------------------------');
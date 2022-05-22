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

const d = 4; // deziu skaicius
const k = 18; // visas knygu skaicius
const nn = 5; // knygu skaicius telpantis i deze

if (d * nn >= k) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}
console.log('-------------------------');

// 4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.

let aa = 5;
let bb = 7;

if (aa > bb) {
    console.log(--aa, ++bb);
} else if (aa < bb) {
    console.log(++aa, --bb);
} 
console.log('-------------------------');

// 5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.

const cc = 50; // sutaupyta Sauliaus suma
const pp = 20; // vienos ledu porcijos kaina

const kk = (Math.floor(cc / pp)); // nupirktu porciju skaicius
const mm = cc % pp; // centu likutis

console.log(`Saulius nusipirks ${kk} porcijas, liks centu ${mm}.`);
console.log('-------------------------');

// 6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.

let nDegtuku = 6;

if (nDegtuku % 3 === 0) {
    console.log('Trikampi sudelioti galima');
} else {
    console.log('Trikampio sudelioti negalima');
} 
console.log('-------------------------');

// 7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)

const menesiai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let n1 = 2;
console.log('Menesio dienu kiekis: ', menesiai[--n1]);
console.log('-------------------------');

// 8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.

let kauliukas = 4;

if (kauliukas % 2 === 0) {
    console.log('Kambari tvarkys vyresnelis');
} else {
    console.log('Kambari tvarkys jaunelis');
}
console.log('-------------------------');

// 9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

let m1 = 1904;
let nNum = (m1 - 1896) / 4;

console.log('n =', ++nNum);

if (m1 % 4 !== 0) {
    console.log('Metai neolimpiniai');
} 
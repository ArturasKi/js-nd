// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai); 

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('---------- 1 ----------');


const pinigine = [];
let ilgis = rand(10, 30);


for (i = 0; i < ilgis; i++) {
    pinigine.push(rand(0, 10));
   
}  console.log(pinigine);

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log('---------- 2 ----------');

let piniguSuma = 0;

for (i = 0; i < pinigine.length; i++) {
    piniguSuma += pinigine[i];
} console.log(piniguSuma);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

console.log('---------- 3 ----------');

let didesniuUzDu = 0;

for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        didesniuUzDu += pinigine[i];
    }
} console.log(didesniuUzDu);

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

console.log('---------- 4 ----------');

for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
} console.log(pinigine);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

console.log('---------- 5 ----------');

let kiekMaxReiksmiu = 0;

for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === Math.max(...pinigine)) {
        kiekMaxReiksmiu++;
    }
} console.log(kiekMaxReiksmiu);


// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

console.log('---------- 6 ----------');


for (i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === 0) {
        pinigine[i] = i;
    }
} console.log(pinigine);

// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log('---------- 7 ----------');

for (i = 0; i < pinigine.length; i++) {
    if (pinigine.length < 30) {
        pinigine.push(rand(0, 10));
    }
} console.log(pinigine);

// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
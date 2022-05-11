// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai); 

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('---------- 1 ----------');


const pinigine = [];
let ilgis = rand(10, 30);


for (let i = 0; i < ilgis; i++) {
    pinigine.push(rand(0, 10));
   
}  console.log(pinigine);

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log('---------- 2 ----------');

let piniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
    piniguSuma += pinigine[i];
} console.log(piniguSuma);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

console.log('---------- 3 ----------');

let didesniuUzDu = 0;

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        didesniuUzDu += pinigine[i];
    }
} console.log(didesniuUzDu);

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

console.log('---------- 4 ----------');

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
} console.log(pinigine);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

console.log('---------- 5 ----------');

let kiekMaxReiksmiu = 0;

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === Math.max(...pinigine)) {
        kiekMaxReiksmiu++;
    }
} console.log(kiekMaxReiksmiu);


// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

console.log('---------- 6 ----------');


for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === 0) {
        pinigine[i] = i;
    }
} console.log(pinigine);

// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log('---------- 7 ----------');

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine.length < 30) {
        pinigine.push(rand(0, 10));
    }
} console.log(pinigine);

// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

console.log('---------- 8 ----------');

let papildomas1 = [];
let papildomas2 = [];

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        papildomas1.push(pinigine[i]);
    } 
    else papildomas2.push(pinigine[i]);
} 

console.log(papildomas1);
console.log(papildomas2);

// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

console.log('---------- 9 ----------');

let dvigubasMasyvas = [];

dvigubasMasyvas = [papildomas1, papildomas2];

console.log(dvigubasMasyvas);

// 10.  Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

console.log('---------- 10 ----------');

let trigubasMasyvas = [];
let masyvasSuKortelem = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

trigubasMasyvas = [papildomas1, papildomas2, masyvasSuKortelem];

console.log(trigubasMasyvas);

// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

console.log('---------- 11 ----------');

trigubasMasyvas[2] = trigubasMasyvas[2].sort();

console.log(trigubasMasyvas);

// 12.  Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

console.log('---------- 12 ----------');

let masterVisa = ['MasterCard', 'Visa'];

while (trigubasMasyvas[2].length !== 20) {
    masyvasSuKortelem.push(masterVisa[Math.floor(Math.random() * masterVisa.length)]);
}

console.log(trigubasMasyvas);

// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

console.log('---------- 13 ----------');

let countVisa = 0;
let countMaster = 0;

for (let i = 0; i < trigubasMasyvas[2].length; i++) {
    if (trigubasMasyvas[2][i] === 'Visa') {
        countVisa++;
    }
    if (trigubasMasyvas[2][i] === 'MasterCard') {
        countMaster++;
    }
} 

console.log(`Visa korteliu kiekis: ${countVisa}`);
console.log(`MasterCard korteliu kiekis: ${countMaster}`);

// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

console.log('---------- 14 ----------');

const ketvirtasSkyrelis = [];

for (let i = 0; i < 10; i++) {
    ketvirtasSkyrelis.push(rand(1000000000, 9999999999));
}

const keturgubasMasyvas = [papildomas1, papildomas2, masyvasSuKortelem, ketvirtasSkyrelis];

console.log(keturgubasMasyvas);

// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

console.log('---------- 15 ----------');

console.log(keturgubasMasyvas[3].sort());

// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

console.log('---------- 16 ----------');

let popieriniuSuma = 0;
let atsitiktinisSk = 0;

while (popieriniuSuma < 500) {
    atsitiktinisSk = rand(3, 10);
    popieriniuSuma += atsitiktinisSk;
    keturgubasMasyvas[1].push(atsitiktinisSk);
    
}

console.log(keturgubasMasyvas);

// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

console.log('---------- 17 ----------');

let laimingiBilietai = 0;

for (let i = 0; i < keturgubasMasyvas[3].length; i++) {
    if (keturgubasMasyvas[3][i] % 777 === 0) {
        laimingiBilietai++;
    }
}
console.log(`Laimingi bilietai: ${laimingiBilietai}`);

// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

let penktasSkyrelis = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];

console.log(penktasSkyrelis[0]);
console.log(penktasSkyrelis[0].length);

for (let i = 0; i < penktasSkyrelis.length; i++) {
    penktasSkyrelis[i].length.sort();
}

console.log(penktasSkyrelis);








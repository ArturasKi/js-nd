// 1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

console.log('----------- 1 ----------');

function tekstas(text) {
    console.log(text);
};

const a = 'Labadiena';
tekstas(a);

// 2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

console.log('----------- 2 ----------');

function twoArguments(a, b) {
    for (let i = 0; i < b; i++) {
        tekstas(a);
    }
}

const kiekKartu = 7;

twoArguments(a, kiekKartu);

// 4. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save);

console.log('----------- 4 ----------');

function kiekSveiku(a) {
    if (typeof a !== 'number' || !isFinite(a)) {
        `ERROR: turi buti tik sveikieji skaiciai.`
    }
    let daliklis = 0;
    for (let i = 2; i <= a; i++) {
        if (a % i === 0 && 
            a / i !== a && 
            a / i !== 1) {
            daliklis++;
        }
    } return daliklis;
}

const b = 10;
console.log(kiekSveiku(b));

// 5. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

console.log('----------- 5 ----------');

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const masyvas100 = [];
const masyvasSveiki = [];

for (let i = 0; i < 100; i++) {
    masyvas100.push(rand(33, 77));
    masyvasSveiki.push(kiekSveiku(rand(33, 77)));
    masyvasSveiki.sort(function(a, b){return a-b});
}

console.log(masyvas100);
console.log(masyvasSveiki);

// 6. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

console.log('----------- 6 ----------');

let masyvasSimtas = [];

for (let i = 0; i < 100; i++) {
    masyvasSimtas.push(rand(333, 777));
};

console.log(masyvasSimtas);

const isPrime = n => {
    if (n === 1 || n === 2) {
        return false;
    } else {
        for (let j = 2; j < n; j++) {
            if (n % j === 0) {
                return false;
            }
        }
    } return true;
};
const filterPrime = masyvasSimtas => {
    const filtered = masyvasSimtas.filter(el => !isPrime(el));
    return filtered;
};

console.log(filterPrime(masyvasSimtas));

// 7. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30 kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

console.log('----------- 7 ----------');

const masyvasAtsitiktinis = [];
const masyvoIlgis = rand(10, 20);
const paskutinis = [];
const paskutinioIlgis = rand(10, 20);

const pakartotasIlgis = rand(10, 30);

for (let k = 0; k < pakartotasIlgis; k++) {
    const pakartotas = [];
    for (let i = 0; i < masyvoIlgis; i++) {
        masyvasAtsitiktinis.push(rand(0, 10));
        if (i < masyvoIlgis - 1) {
            continue;
        } else for (let j = 0; j < paskutinioIlgis; j++) {
            paskutinis.push(rand(0, 10));
        }
        masyvasAtsitiktinis[masyvasAtsitiktinis.length] = paskutinis;
        paskutinis[paskutinioIlgis] = 0;
    }
    pakartotas.push(masyvasAtsitiktinis);
    console.log(pakartotas);
}

// 8. Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.

console.log('----------- 8 ----------');

let suma1 = 0;
let suma2 = 0;

for (let i = 0; i < masyvasAtsitiktinis.length; i++) {
    if (i < masyvasAtsitiktinis.length - 1) {
        suma1 += masyvasAtsitiktinis[i];
    } else for (let j = 0; j < masyvasAtsitiktinis[i].length; j++) {
        suma2 += masyvasAtsitiktinis[i][j];
    }
}

console.log(suma1 + suma2);



// 9. Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

console.log('----------- 9 ----------');

const masyvasIsTriju = [];

for (let i = 0; i < 3; i++) {
    masyvasIsTriju.push(rand(1, 33));
    if (!isPrime(masyvasIsTriju[i])) {
        masyvasIsTriju[masyvasIsTriju.length] = rand(1, 33);
        if (masyvasIsTriju.length === 5 || masyvasIsTriju.length === 6) {
            masyvasIsTriju.length = 4;
        }
    } else masyvasIsTriju.length = 3;
    
}

console.log(masyvasIsTriju);

// 10. Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite;

console.log('----------- 10 ----------');

const masyvas1 = [];

for (let i = 0; i < 10; i++) {
    const masyvas10 = [];
    for (let j = 0; j < 10; j++) {
        masyvas10.push(rand(1, 100));
    } 
    masyvas1.push(masyvas10);
}

console.log(masyvas1);












// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.

function suma(a, b) {
    return (a + b);
}
const s1 = suma(2, 13);
console.log(s1);
console.log('--------------')

// 2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

function kintamieji(a, b) {
    if (a > b) {
    return (`Pirmas skaicius ${a} yra didesnis.`);
    } else if (a < b) {
    return (`Antras skaicius ${b} yra didesnis.`);
    } else if (a === b) {
    return (`Pirmas(${a}) ir antras(${b}) skaiciai yra lygus.`)
    }  
}
let k1 = kintamieji(17, 12);
console.log(k1);

k1 = kintamieji(20, 30);
console.log(k1);

k1 = kintamieji(25, 25);
console.log(k1);
console.log('--------------')

// 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.

function keliamieji(a) {
    if (a % 4 === 0 && a % 400 === 0 || a % 100 !== 0) {
    return (`${a} metai yra keliamieji.`)
    } else {
    return (`${a} metai yra paprastieji.`)
    }
}
m1 = keliamieji(2022);
console.log(m1);
console.log('--------------')

// 4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.

function kvadratas(a) {
    return (a * a);
}
const s2 = kvadratas(7);
console.log(s2);
console.log('--------------')

// 5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.

function skaiciuSuma(a) {
    if (a > 1) {
    let skaicius = 0
    for (i = 1; i <= a; i++) {
    skaicius += i;
    } return console.log(skaicius);
}
}
let s3 = skaiciuSuma(6);
console.log('--------------')

// 6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

function skaicius(num) {
    let nr = 1;
    if (num / nr !== num && num / nr !== 1) {
        for (i = 0; i <= num; i++) {
            
            nr++;
            
        }   
        
    } return console.log(nr);
} 

let s4 = skaicius(2);
console.log('--------------')
//  7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).

function tekstas(text) {
    if (typeof text === 'string') {
        return `Zodzio [${text}] ilgis lygus [${text.length}] simboliu.`
    }
}
console.log(tekstas('Patikrinimas'));
console.log('--------------')
// 8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".

function telefonoNumeris(numeris) {
    if (numeris.length === 10 && typeof numeris === 'object') {
        return `Telefono numeris: (${numeris[0]}${numeris[1]}${numeris[2]}) ${numeris[3]}${numeris[4]}${numeris[5]}-${numeris[6]}${numeris[7]}${numeris[8]}${numeris[9]}`;
    }  
    if (typeof numeris !== 'object') {
        return `ERROR: bloga telefono numerio pateikimo forma.`
    }
    if (numeris.length < 10) {
        return `ERROR: telefono numeris per trumpas.`
    } else {
        return 'ERROR: telefono numeris per ilgas.'
    } 
}
// Patikrinimas
a = [3, 7, 0, 6, 6, 6, 5, 5, 5, 5];
console.log(telefonoNumeris(a));

a = [3, 2, 5, 7, 8];
console.log(telefonoNumeris(a));

a = (6564458789);
console.log(telefonoNumeris(a));

a = ('asdsada');
console.log(telefonoNumeris(a));

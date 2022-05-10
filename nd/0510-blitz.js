// Vienas kates apejimas, gali pagauti nuo 3 iki 5 kartu ziurke.
// Kiek kartu kate apsisuks aplink nama, kad butu pagauta ne maziau nei 20 ziurkiu.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let pagautosZiurkes = 0;
let ziurkes = 0;
let kartai = 0;

do {

    ziurkes = rand(3, 5);
    pagautosZiurkes += ziurkes;
    console.log(ziurkes);
    kartai++;

} while (pagautosZiurkes < 20);

console.log(`Kate apsisuks ${kartai}, pagaus ${pagautosZiurkes} ziurkes.`);





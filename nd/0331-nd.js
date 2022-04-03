// #1

//a)
let sumaA = 0;
for (let i = 0; i === 0; i++) {
    sumaA += i;
}
console.log(sumaA);
//b)
let sumaB = 0;
for (let i = 0; i <= 4; i++) {
    sumaB += i;
}
console.log(sumaB);
//c)
let sumaC = 0;
for (i = 0; i <= 100; i++) {
    sumaC += i;
}
console.log(sumaC);
//d)
let sumaD = 0;
for (i = 574; i <= 815; i++) {
    sumaD += i;
}
console.log(sumaD);
//e)
let sumaE = 0;
for (i = -50; i <= 50; i++) {
    sumaE += i;
}
console.log(sumaE);
//f)
let sumaF = 0;
for (i = -70; i <= 30; i++) {
    sumaF += i;
}
console.log(sumaF);

console.log('--------------');

// #2
const abecele = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = abecele.length - 1; i >= 0; i--) {
    console.log(abecele[i]);
}

console.log('--------------');

// #3
//a)

let rezultatas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra ${rezultatas} vienetai.`);

rezultatas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 5 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra ${rezultatas} vienetai.`);

rezultatas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 7 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra ${rezultatas} vienetai.`);

//b)

rezultatas = 0;
for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra ${rezultatas} vienetai.`);

rezultatas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 5 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra ${rezultatas} vienetai.`);

rezultatas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 7 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra ${rezultatas} vienetai.`);

//c)

rezultatas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ${rezultatas} vienetu.`);

rezultatas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 5 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra ${rezultatas} vienetai.`);

rezultatas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 7 === 0) {
        rezultatas++;
    }
}
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra ${rezultatas} vienetai.`);
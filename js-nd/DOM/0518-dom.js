const tagH1 = document.querySelector('h1');
const tagH2 = document.querySelector('h2:first-of-type');
const tagSpan = document.querySelector('span');

console.log(tagH1);
console.log(tagH2);

tagH1.style.color = 'blue';   //1a

tagH1.classList.add('small');  //1b
console.log(tagH1.outerHTML);
tagH1.classList.remove('main');    //1c
console.log(tagH1.outerHTML);

tagH2.classList.add('first'); //1d
console.log(tagH2.outerHTML);
tagH2.classList.remove('main'); //1d
console.log(tagH2.outerHTML);

tagSpan.style.fontSize = '10px'; //1e
tagSpan.style.color = 'grey'; //1e

const tagH2All = document.querySelectorAll('h2');
const countH2 = tagH2All.length;
console.log(countH2); //2a

const h2First = document.querySelectorAll('.first');
console.log(tagH2All.length - h2First.length); //2b

tagH2All.forEach(tagH2All => {
    tagH2All.style.color = 'aqua';
}); //2c

const tagDivH2 = document.querySelectorAll('div > h2');
tagDivH2.forEach(tagDivH2 => {
    tagDivH2.classList.add('price-tag');
})  //2d

const classNew = document.querySelectorAll('.new');

classNew.forEach(classNew => {
    classNew.style.textDecoration = 'underline';
})  //2e

const gyvKat = document.querySelectorAll('ul');
console.log(gyvKat.length); //2f

gyvKat.forEach(gyvKat => {
    gyvKat.style.border= '2px solid purple';
    gyvKat.style.padding= '15px 50px';
}) //2g

const gyvNew = document.querySelectorAll('ul > .new');
console.log(gyvNew.length); //2h

const gyvNew1 = document.querySelectorAll('ul > .new')[0];

console.log(gyvNew1)

const btnColor = document.querySelector('#h1-color');
const btnFont = document.querySelector('#h1-font');

btnColor.addEventListener('click', () => {
    console.log('Paspausta');
    tagH1.style.color = 'green';
})  //3a

btnFont.addEventListener('click', () => {
    console.log('Paspausta');
    tagH1.style.fontSize = '10px';
})  //3a

document.querySelector('i').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.fontWeight = 'bold' 
})  //3b

document.querySelector('.prices').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.backgroundColor = e.target.style.backgroundColor === 'grey' ? 'white' : 'grey';
})  //3c

document.querySelector('#contacts').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.color = 'orange';
})  //3d

document.querySelector('#contacts > u').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.fontSize = '20px';
})  //3e

document.querySelector('#contacts b').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style = '';
})  //3f

const btnColorBack = document.querySelector('#h1-color-back');
const btnFontBack = document.querySelector('#h1-font-back');

btnColorBack.addEventListener('click', () => {
    console.log('Paspausta');
    tagH1.style.color = 'blue';
})  //3g

btnFontBack.addEventListener('click', () => {
    console.log('Paspausta');
    tagH1.style.fontSize = '16px';
})  //3g







/*
1. Atskiri elementai
a. Tamsiai ??aliai nuspalvinti H1 tag??;
b. Tagui i prid??ti klas?? small;
Https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
c. I?? tago H1 pa??alinti klas?? main;
d. Tik tam H2 tagui, kuris i??kart eina po H1 tago, prid??ti klas?? first ir pa??alinti
klas?? main;
Https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
e. Pirmam span tagui, kuris yra H2 viduje suma??inti fonto dyd?? iki 10px ir nuda??yti
pilkai
2. Elemet?? grup??s (nodeList) skai??iavimus i??vest ?? consol??
a. Suskai??iuoti kiek yra H2 tag??;
b. Suskai??iuoti kiek yra H2 tag??, kurie neturi klas??s first
c. Visus H2 tagus nuspalvinti ??viesiai m??lynai
d. Tag??, kurie yra div su klase prices, viduje esantiems H2 tagams prid??ti klas??
price-tag;
e. Pabraukti visus tagus su klase new;
f. Suskai??iuoti kiek yra gyv??n?? kategorij?? ir ??iraf?? (jos yra ul tagai);
g. Tagus ul apibraukite r??meliais ir u??d??kite 15px padding?? vir??uje ir apa??ioje ir
50px padding?? kair??je ir de??in??je;
H. Suskai??iuoti kiek yra nauj?? gyv??n?? (su klase new);
i. Suskai??iuoti atskirai kiek yra nauj?? gyv??n?? kiekvienoje kategorijoje;
3. Element?? events
a. Padaryti tai k?? liepia mygtukai Header1 sekcijoje;
b. Padaryti, kad paspaudus ant i tago jis pakeist?? fonto svor?? ?? bold;
c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeist?? ??
pilk??, o paspaudus dar kart?? v??l gr????tu ?? balt?? spalv??;
d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui b??t?? prid??ta css
savyb?? color = orange;
e. Padaryti taip, kad paspaudus ant padidinti, esan??io tage su id contacts, tagui su id contacts b??t?? prid??ta css savyb?? fontSize = 20px;
f. Padaryti taip, kad paspaudus ant X, esan??io tage su id contacts, prid??tos tage su id contacts savyb??s b??t?? panaikintos
Https://stackoverflow.com/questions/18691655/remove-style-on-element
g. Padaryti tai k?? liepia mygtukai Header2 sekcijoje;
4. Element?? grupi?? events
a. Padaryti, kad dukartus paspaudus ant nauj?? gyv??n?? jie nusispalvintu raudonai
Https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
b. Padaryti, kad paspaudus ant gyv??no jis b??t?? atvaizduojamas 130% didesniu
fonto dyd??iu. ???PATINKA??? tas neturi galioti.
c. Padaryti, kad paspaudus ant ???PATINKA???, atitinkamai (t??vinei) sekcijai b??t??
priskirta klas?? like;
5. Dinaminis element?? k??rimas (su createElement)
a. Dinami??kai su JS prid??ti nauj?? kain?? ???Senjorai tik: 1.99 eur???;
b. Dinami??kai su JS Prid??ti nauj?? kain?? ???Senjor?? grup?? iki 10: tik 5.99 eur??? Padaryti,
kad prid??tas elementas tur??t?? klas?? new ir ant jo paklikinus jis pasidaryt?? ??alias;
c. Dinami??kai su JS kiekvienoje gyv??n?? kategorijoje po ???PATINKA??? prid??kite dar
vien?? li element?? ???NEPATINKA???, kur?? paspaudus atitinkamoje sekcijoje b??t??
nuimta klas?? like
d. Dinami??kai su JS sukurkite nauj?? mygtuk?? grup?? HEADER 3 naudojant
analogi??k?? Html tag?? strukt??r?? kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas
vadint??si, ???Pabraukti H1 tag?????, o antras ???Nepabraukti H1 tag?????. Mygtukai turi
daryti tai kas ant j?? para??yta */


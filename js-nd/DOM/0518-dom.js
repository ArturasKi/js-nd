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
a. Tamsiai žaliai nuspalvinti H1 tagą;
b. Tagui i pridėti klasę small;
Https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
c. Iš tago H1 pašalinti klasę main;
d. Tik tam H2 tagui, kuris iškart eina po H1 tago, pridėti klasę first ir pašalinti
klasę main;
Https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
e. Pirmam span tagui, kuris yra H2 viduje sumažinti fonto dydį iki 10px ir nudažyti
pilkai
2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
a. Suskaičiuoti kiek yra H2 tagų;
b. Suskaičiuoti kiek yra H2 tagų, kurie neturi klasės first
c. Visus H2 tagus nuspalvinti šviesiai mėlynai
d. Tagų, kurie yra div su klase prices, viduje esantiems H2 tagams pridėti klasę
price-tag;
e. Pabraukti visus tagus su klase new;
f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
50px paddingą kairėje ir dešinėje;
H. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
3. Elementų events
a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į
pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css
savybė color = orange;
e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos
Https://stackoverflow.com/questions/18691655/remove-style-on-element
g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
4. Elementų grupių events
a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai
Https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu
fonto dydžiu. “PATINKA” tas neturi galioti.
c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų
priskirta klasė like;
5. Dinaminis elementų kūrimas (su createElement)
a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti,
kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar
vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų
nuimta klasė like
d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant
analogišką Html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas
vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi
daryti tai kas ant jų parašyta */


// DOM.addEventListener('click', (e) => {   
//     e.preventDefault();  padaro, kad po paspaudimo nesirefreshintu narsykle;
// })



import { useEffect, useState } from 'react';
import './App.css';
import rand from './functions/rand';
import randColor from './functions/randColor';


function App() {

  const [skaicius, setSkaicius] = useState('');
  const [kv, setKv] = useState(null);

  // useEffect(() => setKv(
  //   Array.from({length: skaicius}).map(_ => [])
  // ), [skaicius]);

  const inputSkaicius = e => {
    setSkaicius(e.target.value);
    console.log(e.target.value);
  }

  const prideti = () => {
    let kvadratai = [];
    const ilgis = skaicius;
    for (let i = 0; i < ilgis; i++) {
      kvadratai = Array.from({length: skaicius});
    }
    setKv(k => [...k, ...kvadratai]);
  }

  const isimti = () => {
    setKv([]);
  }

  // const prideti = () => {
  //   const kvadratai = Array.from({length: skaicius});
  //   for (let i = 0; i < kvadratai.length; i++) {
  //     kvadratai.push('');
  //   }
  //   setKv(k => [...k, ...kvadratai]);
  // }

  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === kv) {
        return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
}, [kv]);

  
  return (

    <div className="App">
      <header className="App-header">
        <button onClick={prideti}>PRIDĖTI</button>
        <button onClick={isimti}>IŠIMTI</button>
        <input type='number' value={skaicius} onChange={inputSkaicius}></input>
        <div className='kvc'>
          {
            kv ? kv.map((c, i) => <div className="kv" key={i}>{rand(100, 200)}</div>) : null
          }
        </div>
      </header>
    </div>
  );
}

export default App;

// REACT FORMS

// 1. Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į
// laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje
// nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir
// paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai
// prisideda naujas laukelyje nurodytas kvadratėlių kiekis.
// Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand
// skaičius 100 - 200.
// 2. Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui
// ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui
// persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus
// sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir
// atvaizduoti bendrą katinukų svorį.
// 3. Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename
// laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir
// antro laukelio yra 2. Pakeitus skaičius viename kažkuriame
// laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad
// santykis išliktų nepakitęs.
// 4. Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo
// laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai
// komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų
// spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial,
// Times new Roman ar panašiai) Select pasirinkimų nustatymai turi
// keisti atvaizduojamo teksto išvaizdą.
// 5. Sukurti komponentą su dviem range tipo įvedimais
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/r
// ange vienu color įvedimu
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/c
// olor ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką
// sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei
// juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato
// išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai
// nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono
// spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma
// ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti atsiranda naujas reguliuojamas kvadratas.

// {
//   kv.map((c, i) => <div className="kv" key={i}></div>)
// }
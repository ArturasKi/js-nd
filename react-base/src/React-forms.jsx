import { useEffect, useState, useRef } from 'react';
import './App.css';
import rand from './functions/rand';
// import randColor from './functions/randColor';

function App() {

// #1
  const [skaicius, setSkaicius] = useState('');
  const [kv, setKv] = useState(null);

  // useEffect(() => setKv(
  //   Array.from({length: skaicius}).map(_ => [])
  // ), [skaicius]);

  const inputSkaicius = e => {
    setSkaicius(e.target.value);
    console.log(e.target.value);
  }


// pvz => https://stackoverflow.com/questions/67486867/how-do-i-display-a-number-of-input-elements-equal-to-a-selected-number-react-j
  const prideti = () => {
    let kvadratai = [];
    const ilgis = skaicius;
    for (let i = 0; i < ilgis; i++) {
      kvadratai = Array.from({length: skaicius});
    }
    setKv(k => k === null ? [...kvadratai] : [...k, ...kvadratai]);
  }

  const isimti = () => {
    setKv([]);
  }

  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === kv) {
        return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);


// #2
  const [katinukai, setKatinukai] = useState([]);
  const [vardas, setVardas] = useState('');
  const [svoris, setSvoris] = useState('');

  const inputVardas = e => {
    setVardas(e.target.value);
  }

  const inputSvoris = e => {
    setSvoris(e.target.value);
  }

  katinukai.sort((a, b) => b[1] - a[1]);
  
  const duomenys = [vardas, svoris];

  let sum = useRef(0)
  const addKatinukai = () => {
    setKatinukai(k => [...k, duomenys]);
    sum.current += Number(svoris);
  }


  // SUTVARKYTI, KAD KATINUKAI LIKTŲ PO PERKROVIMO
  useEffect(() => {
    setKatinukai(JSON.parse(localStorage.getItem('cat') ?? '[]'))
  }, [])

  useEffect(() => {
    if (null === katinukai) {
      return
    }
    localStorage.setItem('cat', JSON.stringify(katinukai))
  }, [katinukai])

// #3
  const [skaicius1, setSkaicius1] = useState(50);
  const [skaicius2, setSkaicius2] = useState(100);
  
// pvz => https://stackoverflow.com/questions/56756114/react-setstate-in-useeffect-causes-infinite-render-cycle
  useEffect(() => {
    setSkaicius1(skaicius2 / 2);
  }, [skaicius2]);

  useEffect(() => {
    setSkaicius2(skaicius1 * 2);
  }, [skaicius1]);

  // #4
  const [tekstas, setTekstas] = useState('');
  const [spalva, setSpalva] = useState('yellow');
  const [dydis, setDydis] = useState();
  const [stilius, setStilius] = useState();

  // #5
  const [color, setColor] = useState('#000000');
  const [width, setWidth] = useState('10px');
  const [height, setHeight] = useState('100px');
  const [rect, setRect] = useState([]);

  const addRect = () => {
    setRect(k => [...k, rect]);
  }

  // SUTVARKYTI SAVE MYGTUKĄ
  const saveRect = () => {

  }

  useEffect(() => {
    setRect(JSON.parse(localStorage.getItem('rect') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === rect) {
        return;
    }
    localStorage.setItem('rect', JSON.stringify(rect));
  }, [rect]);

  return (

    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>#1</legend>
          <button onClick={prideti}>PRIDĖTI</button>
          <button onClick={isimti}>IŠIMTI</button>
          <input type='number' value={skaicius} onChange={inputSkaicius}></input>
          <div className='kvc'>
            {
              kv ? kv.map((c, i) => <div className="kv" key={i}>{rand(100, 200)}</div>) : null
            }
          </div>
        </fieldset>
        <fieldset>
          <legend>#2</legend>
          <label>Katinuko vardas: </label>
          <input type='text' value={vardas} onChange={inputVardas}></input>
          <br/>
          <label>Katinuko svoris: </label>
          <input type='number' value={svoris} onChange={inputSvoris}></input>
          <br/>
          <button onClick={addKatinukai}>ĮVESTI:</button>
          <div className='green-field'>
            {
              katinukai.map((c, i) => <div className='katinas' key={i}>Vardas: {c[0]}; Svoris: {c[1]}</div>)
            }
          </div>
          <h4>Bendras katinukų svoris: {sum.current} kg</h4>
        </fieldset>
        <fieldset>
          <legend>#3</legend>
          <input type='number' value={skaicius1} onChange={e => {
          setSkaicius1(e.target.value);}}></input>
          <br/>
          <input type='number' value={skaicius2} onChange={e => {
          setSkaicius1(e.target.value);}}></input>
        </fieldset>
        <fieldset>
          <legend>#4</legend>
          <input type='text' value={tekstas} onChange={e => {setTekstas(e.target.value)}}></input>
          <div className='green-field' style={{color: spalva, fontSize: dydis, fontFamily: stilius}}>{tekstas}</div>
          <select onChange={e => {setSpalva(e.target.value)}}>
            <option style={{color: 'yellow'}}>Yellow</option>
            <option style={{color: 'red'}}>Red</option>
            <option style={{color: 'green'}}>Green</option>
            <option style={{color: 'blue'}}>Blue</option>
            <option style={{color: 'purpple'}}>Purpple</option>
          </select>
          <br/>
          <select onChange={e => {setDydis(e.target.value)}}>
            <option style={{fontSize: '8px'}}>8px</option>
            <option style={{fontSize: '10px'}}>10px</option>
            <option style={{fontSize: '12px'}}>12px</option>
            <option style={{fontSize: '14px'}}>14px</option>
            <option style={{fontSize: '16px'}}>16px</option>
          </select>
          <br/>
          <select onChange={e => {setStilius(e.target.value)}}>
            <option style={{fontFamily: 'Arial'}}>Arial</option>
            <option style={{fontFamily: 'Courier'}}>Courier</option>
            <option style={{fontFamily: 'Tahoma'}}>Tahoma</option>
            <option style={{fontFamily: 'Calibri'}}>Calibri</option>
            <option style={{fontFamily: 'Verdana'}}>Verdana</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>#5</legend>
          <label>Plotis</label>
          <input type="range" min="10" max="200" onChange={e => setHeight(`${e.target.value}px`)} value={height}></input>
          <br/>
          <label>Aukštis</label>
          <input type="range" min="10" max="200" onChange={e => setWidth(`${e.target.value}px`)} value={width}></input>
          <br/>
          <input type="color" onChange={e => setColor(e.target.value)} value={color}></input>
          <br/>
          <button onClick={addRect}>SUKURTI</button>
          <button onClick={saveRect}>IŠSAUGOTI</button>
          <div className='kvc'>
            {
              rect.map((k, i) => <div key={i} style={{width: width, height: height, background: color, margin: '10px'}}>{k}</div>)
            }
          </div>
        </fieldset>
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

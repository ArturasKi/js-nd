import './App.css';
import rand from './functions/rand';
import randColor from './functions/randColor';
import { useState, useEffect, useRef } from 'react';

const cats = [
  'Mulkis',
  'Kakius',
  'Pilkius',
  'Balčius'
];

const dogs = [
  'Sniego',
  'Dingo',
  'Atsirado',
  'Pifas',
  'Bobikas'
];

//1. Paspaudus mygtuką atvaizduoti katinukus.


function App() {
  
  const apsRand = useRef([]);

  const changeColor = () => {
    apsRand.current.style.background = randColor();
    }

  const [kv, setKv] = useState(null);
  const istorija = useRef([]);
  const [katinai, setKatinai] = useState([]);
  const [history, setHistory] = useState([]);

  // PIRMAS KROVIMAS
  useEffect(() => {
      setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
  }, []);

  // UZSAUGOS POKYCIUS
  useEffect(() => {
      if (null === kv) {
          return;
      }
      localStorage.setItem('kv', JSON.stringify(kv));
      istorija.current.unshift(kv);
  }, [kv]);

  const prideti = () => {
      const kiekis = rand(5, 10);
      const kvadratukai = [];
      for (let i = 0; i < kiekis; i++) {
          kvadratukai.push(i);
      }
      setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
      console.log(istorija);
  }

  const isvalyti = () => {
      setKv([]);
  }

  const atgal = () => {
      let senas = istorija.current.shift();
      if (!senas) {
          setKv([]);
      } else if (senas.length === kv.length) {
          senas = istorija.current.shift();
          if (!senas) {
              setKv([]);
          } else {
              setKv(senas);
          }
      }
      else {
          setKv(senas);
      }
      console.log(istorija.current);
  }


  
  const addCats = () => {
      setKatinai(cats);
  }
  const addDogs = () => {
      setKatinai(dogs);
  }
  const removeAll = () => {
      setKatinai([]);
  }
    // JSON.stringify - paverciam masyva i stringa;

  return (

    <div className="App">
      <header className="App-header">
        <button onClick={prideti}>PRIDĖTI</button>
        <div className='kvc'>
            {
                kv ? kv.map((k, i) => <div style={{background: 'green'}} key={i} className='kv'>{i}</div>) : null
            }
        </div>
        <button onClick={isvalyti}>IŠVALYTI</button>
        <button onClick={atgal}>ATGAL</button>
        <select>
          <option>{JSON.stringify(istorija)}</option>
        </select>
        
        <br/>
        <button onClick={addCats}>CATS CLICK</button>
        <button onClick={addDogs}>DOGS CLICK</button>
        <button onClick={removeAll}>REMOVE</button>
        <div className='green-field'>
          {
            katinai.map((c, i) => <div key={i}>{c}</div>)
          }
        </div>
        
        <button onClick={changeColor}>KEISTI</button>
        <div ref={apsRand} className='aps' style={{background: 'sandybrown'}}>1</div>
        <div ref={apsRand} className='aps' style={{background: 'sandybrown'}}>2</div>
        <div ref={apsRand} className='aps' style={{background: 'sandybrown'}}>3</div>
        
      </header>
    </div>

  );
}

export default App;

// 1. Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda
// rand 5-10 kvadratukai. Paspaudus dar kartą dar prisideda rand
// kvadratukų skaičius. Puslapį perkrovus kvadratukų skaičius
// pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus
// visi kvadratukai dingsta. Padaryti mygtuką “Atgal”, kurį
// paspaudus kvadratukų skaičius pasidaro lygus skaičiui, buvusiam
// prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama
// dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą).
// Puslapiui persikrovus istorija yra užmirštama. Saugoma tik
// istorija iki puslapiui persikraunant. Į istoriją turi būti
// pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų
// paspaudimo.
// 2. Patobulinti 1 uždavinį taip, kad šalia mygtuko “Atgal” atsirastų
// select laukelis, kuriame būtų sudedami visi padaryti žingsniai.
// T.y. jeigu mygtukas “Pridėti” buvo paspaustas 3 kartus select
// laukelis turi turėti tris pasirinkimus “1 žingsnis”, “2
// žingsnis”, “3 žingsnis” ir t.t. Istorija turi būti atstatoma iki
// konkretaus žingsnio.(vietoj useRef čia naudojamas useState
// istorijai saugoti)
// 3. Sukurti komponentą su 3 apskritimais, kurie yra rand spalvų ir
// mygtuką “Keisti”. Apskritimus DOMe pasižymėti naudojant useRef
// hooką. Paspaudus mygtuką, panaudoti vanilaJS savybę
// element.style.background ir pakeisti apskritimų spalvas į kitas
// random spalvas

/* <div className='kvc'>
          {
            aps.map((c, i) => <div ref={apsRand} className='aps' key={i}>{i}</div>)
          }
</div> */
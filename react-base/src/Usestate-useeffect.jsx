import './App.css';
import { useState, useEffect } from 'react';
import rand from './functions/rand';
import randColor from './functions/randColor';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [gyvuliai, setGyvuliai] = useState([]);

  useEffect(() => {
    setGyvuliai(JSON.parse(localStorage.getItem('gyvuliai'))); // gali buti null arba []
}, []);

// UZSAUGOS POKYCIUS
useEffect(() => {
    if (null === gyvuliai) {
        return;
    }
    localStorage.setItem('gyvuliai', JSON.stringify(gyvuliai));
}, [gyvuliai]);

  // const addGyvuliai = () => {
  //   // const kiekis = rand(5, 20);
  //   const gyvulys = {id: uuidv4(), color: randColor(), where: 'ganykla'};
  //   // for (let i = 0; i < kiekis; i++) {
  //   //   gyvulys.push();
  //   // }
  //   setGyvuliai(k => null === k ? [...gyvulys] : [...k, ...gyvulys]);
  // }

  const addGyvuliai = () => {
    const kiekis = rand(5, 20);
    const gyvulys = [];
        for (let i = 0; i < kiekis; i++) {
      gyvulys.push({id: uuidv4(), color: randColor(), where: 'ganykla'});
    setGyvuliai(k => null === k ? [...gyvulys] : [...k, ...gyvulys]);
  }
}

  const go = id => {
    setGyvuliai (a => {
      const gyvulys = a.filter(av => av.id === id)[0];
      gyvulys.where = 'kirpykla';
      const kitos = a.filter(av => av.id !== id);
      return [...kitos, gyvulys];
    })
  }
  

  return (

    <div className="App">
      <header className="App-header">
      <h1>GANYKLA</h1>
      <button onClick={addGyvuliai}>I GANYKLA</button>
        <div className='section'>
          <div className='col'>
            <h2>AVYS</h2>
            {
              gyvuliai.filter(a => a.where === 'kirpykla').map(a => <div className='aps' onClick={() => go(a.id)} key={a.id}></div>)
            }
          </div>
          <div className='col'>
            <h2>KARVES</h2>
            {
              gyvuliai.filter(a => a.where === 'ganykla').map(a => <div className='kv' onClick={() => go(a.id)} key={a.id}></div>)
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


// REACT useState & useEffect PROJECT (MyLittleFarm)

// Sukurti tu????i?? ???Ganykl?????. J?? padalinti ?? dvi dalis su u??ra??ais- Avys
// ir Karv??s. Sukurti mygtuk?? ????? ganykl?????, kur?? paspaudus de??in?? pus??
// b??t?? apgyvendinta avimis, kurias vaizduoja apskritimai, o kair?? pus??
// karv??mis, kurias vaizduoja keturkampiai. Avi?? ir karvi?? skai??ius rand
// 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis numeris:
// pvz avim A0254787, karv??m K0007898, kur skai??ius yra septyn??enklis
// rand skai??ius. Perkrovus puslap?? avi?? ir karvi?? skai??ius ir j??
// identifikaciniai numeriai turi nekisti (tik pat?? pirm?? kart?? ???Ganykla???
// turi b??ti tu????ia). Paspaudus ant avies arba karv??s ji turi perb??gti ??
// prie??ing?? ganyklos pus?? (antr?? kart?? paspaudus gr????ti atgal).
// Perkrovus puslap?? perb??gimai turi i??likti nepakit??. Pakartotinai
// paspaudus ????? ganykl?????, turi atsirasti nauji gyvuliai, kaip ir pirm??
// kart??.
// Pastaba: karv?? avi?? ganyklos pus??je lieka karve, o avis- avimi.
// Nemutuojam! Perb??gusios avys ir karv??s yra dedamos ?? bandos gal??.
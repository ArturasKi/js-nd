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

// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys
// ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė
// būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė
// karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand
// 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis numeris:
// pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis
// rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų
// identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla”
// turi būti tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į
// priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal).
// Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai
// paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą
// kartą.
// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi.
// Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą.
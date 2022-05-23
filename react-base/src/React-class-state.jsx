import './App.css';
import { useState } from 'react';
import randColor from './functions/randColor';

function App() {

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
// 1.
  const [figure, setFigure] = useState('aps');

  const changeToKv = () => {
    setFigure(old => old === 'aps' ? 'kv' : 'aps');
  }
// 2.
  const [random, setRandom] = useState(rand(1, 25));

  const changeToRand = () => {
    setRandom(rand(1, 25));
  }
// 3.
  const [number, setNumber] = useState(0);

  const plusOne = () => {
    setNumber(number + 1);
  }

  const minusThree = () => {
    setNumber(number - 3);
  }
// 4.
  const [kv, setKv] = useState([]);

  const addKv = () => {
    setKv(k => [...k, randColor()]);
  }

// 5.

  const [kvRed, setKvRed] = useState([]);

  const addRedKv = () => {
    setKvRed(k => [...k, 'red']);
  }


  const [kvBlue, setKvBlue] = useState([]);

  const addBlueKv = () => {
    setKvBlue(k => [...k, 'blue']);
  }

  const resetKv = () => {
    setKvRed(k => k.slice(k.length));
    setKvBlue(k => k.slice(k.length));
    setKv(k => k.slice(k.length));
  }

  return (

    <div className="App">
      <header className="App-header">
        <div className={figure}>{random}</div>
        <button onClick={changeToKv}>CHANGE</button>
        <button onClick={changeToRand}>CHANGE NR</button>
        <button onClick={plusOne}>+</button>
        <span>{number}</span>
        <button onClick={minusThree}>-</button>
        
        <div className='kvc'>
            {
                kv.map((c, i) => <div className='kv' key={i} style={{backgroundColor: c}}>{i}</div>)
            }
        </div>
        <button onClick={addKv}>ADD</button>

        
        <div className='kvc'>
            {
                kvRed.map((c, i) => <div className='kv' key={i} style={{backgroundColor: 'red'}}>{i}</div>)
            }
        </div>
        <div className='kvc'>
            {
                kvBlue.map((c, i) => <div className='kv' key={i} style={{backgroundColor: 'blue'}}>{i}</div>)
            }
        </div>
        <button onClick={addRedKv}>ADD RED</button>
        <button onClick={addBlueKv}>ADD BLUE</button>
        <button onClick={resetKv}>RESET</button>
      </header>
    </div>
  );
}

export default App;

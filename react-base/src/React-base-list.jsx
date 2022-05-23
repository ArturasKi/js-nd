import './App.css';

function App() {

  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas',
  'avigalvis'];

  // 2.
  dogs.sort((a, b) => {
    return b.length - a.length;
  });
  
  let skaiciai = 1;

  // 4.
  const dogsLowerCase = [];
  for(let i = 0; i < dogs.length; i++){
   if (dogs[i][0].toUpperCase() !== dogs[i][0]) {
    dogsLowerCase.push(dogs[i]);
   }
  };
  console.log(dogsLowerCase);


  return (

    <div className="App">
      <header className="App-header">
        <div className='kvc'>
            {
                dogs.map((c, i) => <div className='kv' key={i} style={{backgroundColor: 'brown', fontSize: '12px'}}>{dogs[i]}</div>)
            }
        </div>
        <div className='kvc'>
            {
                dogs.map((c, i) => <div className='aps' key={i} style={{backgroundColor: 'green', fontSize: '12px'}}>{skaiciai++} {dogs[i]}</div>)
            }
        </div>
        <div className='kvc'>
            {
                dogs.map((c, i) => <div className={i % 2 === 0 ? 'kv' : 'aps'} key={i} style={{backgroundColor: 'purple', fontSize: '12px'}}>{dogs[i]}</div>) // 3.
            }
        </div>
        <div className='kvc'>
            {
                dogsLowerCase.map((c, i) => <div className='aps' key={i} style={{backgroundColor: 'green', fontSize: '12px'}}>{dogsLowerCase[i]}</div>)
            }
        </div>
        <div className='kvc'>
            {
                dogs.map((c, i) => <div className='kv' key={i} style={dogs[i].length > 6 ? {color: 'green'} : {color: 'red'}}>{dogs[i].length}</div>)
            }
        </div>
      </header>
    </div>
  );
}

export default App;

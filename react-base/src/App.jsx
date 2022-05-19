import './App.css';
import Labaszuiki from './components/labaszuiki.jsx';
import Propsas from './components/props-one.jsx';
import Propsthree from './components/props-three';
import Propstwo from './components/props-two';
import Zebraibebrai from './components/zebraibebrai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labaszuiki/>
        <Propsas betkoks='Žalias zuikis'></Propsas>
        <Zebraibebrai skaicius={1}></Zebraibebrai>
        <Propstwo pirmas='Aš esu pirmas.' antras='Aš esu antras.'></Propstwo>
        <Propsthree pirmas='Aš ir vėl pirmas.' antras='Aš ir vėl antras.' spalva='tomato'></Propsthree>
      </header>
    </div>
  );
}

export default App;

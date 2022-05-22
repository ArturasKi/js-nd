import './App.css';
import Labaszuiki from './components/react-base/labaszuiki';
import Propsas from './components/react-base/props-one';
import Propsthree from './components/react-base/props-three';
import Propstwo from './components/react-base/props-two';
import Zebraibebrai from './components/react-base/zebraibebrai';

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

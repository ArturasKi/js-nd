// import { useEffect, useState, useRef } from 'react';
import List from './crud/List';
import './App.css';
import './Crud.scss';
import Create from './crud/Create';
import { useEffect, useState } from 'react';
import { create, read } from './functions/localStorage';

function App() {

  const [scooters, setScooters] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    setScooters(read());
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-left'>
          <Create setCreateData={setCreateData}></Create>
        </div>
        <div className='col-right'>
          <List scooters={scooters}></List>
        </div>
      </div>
    </div>

    
  );
}

export default App;

// Paspirtuko modelis;
// 
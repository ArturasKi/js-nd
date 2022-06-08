// import { useEffect, useState, useRef } from 'react';
import List from './crud/List';
import './Crud.scss';
import Create from './crud/Create';
import { useEffect, useState } from 'react';
import { create, read, remove, edit } from './functions/localStorage';
import Edit from './crud/Edit';
import Stats from './crud/Stats';


function App() {

  const [scooters, setScooters] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);

  // READ
  useEffect(() => {
    setScooters(read());
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-left'>
            <Create setCreateData={setCreateData}></Create>
            <Stats scooters={scooters}></Stats>
          </div>
          <div className='col-right'>
            <List scooters={scooters} setDeleteData={setDeleteData} setModalData={setModalData}></List>
          </div>
        </div>
      </div>
      <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );
}

export default App;

// Paspirtuko modelis;
// 
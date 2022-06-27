// import { useEffect, useState, useRef } from 'react';
import List from "./Components/List";
import "./Crud.scss";
import { useEffect, useState } from "react";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import ScooterContext from "./Components/ScooterContext";
import Message from "./Components/Message";
import axios from 'axios';

function App() {
  const [scooters, setScooters] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [sortScooters, setSortScooters] = useState("1");
  const [message, setMessage] = useState(null);

  // READ
  useEffect(() => {
    axios.get('http://localhost:3003/kolts')
    .then(res => setScooters(res.data));
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/kolts', createData)
    .then(res => {
      showMessage(res.data.msg); // iš serverio ateina ats;
      setLastUpdate(Date.now());
      console.log('Created!');
    })
    .catch(error => {
      showMessage({ text: error.message, type: 'danger' }); // kai bus error, bus rodoma žinutė;
    })
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/kolts/' + deleteData.id)
    .then(res => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
      console.log('Deleted!');
    });
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/kolts/' + editData.id, editData)
    .then(res => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
      console.log('Edited!');
    });
  }, [editData]);

  const showMessage = msg => {
    setMessage(msg); // set'inam msg, kad pasirodytų;
    setTimeout(() => setMessage(null), 5000); // vienkartinis intervalas, žinutė dingsta už 5s;
  }

  // SORT
  useEffect(() => {
    localStorage.getItem("sort_type")
      ? setSortScooters(localStorage.getItem("sort_type"))
      : setSortScooters("1");
  }, []);


  // useEffect(() => {
  // axios.get('http://localhost:3003/kolts')
  //   .then(res => setSortScooters(res.data.sort_type));
  // }, []);

  return (
  <ScooterContext.Provider value={
    {
    scooters,
    setCreateData,
    setDeleteData,
    setModalData,
    modalData,
    setEditData,
    message,
    sortScooters,
    setSortScooters
    }
    }>
      <div className="container">
        <div className="row">
          <div className="col-left">
            <Create/>
          </div>
          <div className="col-right">
            <List
              scooters={scooters}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
              sortScooters={sortScooters}
            ></List>
          </div>
        </div>
      </div>
      <Edit/>
      <Message/>
  </ScooterContext.Provider>
  );
}

export default App;

// Paspirtuko modelis;
//

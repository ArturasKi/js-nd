// import { useEffect, useState, useRef } from 'react';
import List from "./Components/List";
import "./Crud.scss";
import { useEffect, useState } from "react";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import ScooterContext from "./Components/ScooterContext";
import axios from 'axios';
// import Stats from "./Components/Stats";
// import Sorting from "./Components/Sorting";

function App() {
  const [scooters, setScooters] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  // const [sortScooters, setSortScooters] = useState("1");

  // READ
  useEffect(() => {
    axios.get('http://localhost:3003/kolts')
    .then(res => setScooters(res.data));
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/kolts', createData)
    .then(_ => {
      setLastUpdate(Date.now());
      console.log('Created!');
    });
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/kolts/' + deleteData.id)
    .then(_ => {
      setLastUpdate(Date.now());
      console.log('Deleted!');
    });
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/kolts/' + editData.id, editData)
    .then(_ => {
      setLastUpdate(Date.now());
    });
  }, [editData]);

  // SORT
  // useEffect(() => {
  //   localStorage.getItem("sort_type")
  //     ? setSortScooters(localStorage.getItem("sort_type"))
  //     : setSortScooters("1");
  // }, []);

  return (
  <ScooterContext.Provider value={
    {
    scooters,
    setCreateData,
    setDeleteData,
    setModalData,
    modalData,
    setEditData
    }
    }>
      <div className="container">
        <div className="row">
          <div className="col-left">
            <Create/>
            {/* <Stats scooters={scooters}></Stats> */}
            {/* <Sorting
              sortScooters={sortScooters}
              setSortScooters={setSortScooters}
            ></Sorting> */}
          </div>
          <div className="col-right">
            <List
              scooters={scooters}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
              // sortScooters={sortScooters}
            ></List>
          </div>
        </div>
      </div>
      <Edit/>
  </ScooterContext.Provider>
  );
}

export default App;

// Paspirtuko modelis;
//

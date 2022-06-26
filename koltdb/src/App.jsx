// import { useEffect, useState, useRef } from 'react';
import List from "./Components/List";
import "./Crud.scss";
import { useEffect, useState } from "react";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import ScooterContext from "./Components/ScooterContext";
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
    setScooters();
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }

    setLastUpdate(Date.now());
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }

    setLastUpdate(Date.now());
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }

    setLastUpdate(Date.now());
  }, [editData]);

  // SORT
  // useEffect(() => {
  //   localStorage.getItem("sort_type")
  //     ? setSortScooters(localStorage.getItem("sort_type"))
  //     : setSortScooters("1");
  // }, []);

  return (
  <ScooterContext.Provider value={{scooters}}>
      <div className="container">
        <div className="row">
          <div className="col-left">
            <Create setCreateData={setCreateData}></Create>
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
      <Edit
        setEditData={setEditData}
        modalData={modalData}
        setModalData={setModalData}
      ></Edit>
  </ScooterContext.Provider>
  );
}

export default App;

// Paspirtuko modelis;
//

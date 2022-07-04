import axios from "axios";
import "./Crud.scss";
import { useEffect, useState } from "react";
import FrontContext from "./Components/front/FrontContext";
import FrontList from "./Components/front/List";
import ScooterList from "./Components/front/ScooterList";
import Nav from './Components/Nav';

function Front() {
  const [colors, setColors] = useState(null);
  const [scooters, setScooters] = useState(null);
  const [createComment, setCreateComment] = useState(null);

  // READ COLORS
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/colors") // paimama iš serverio;
      .then((res) => {
        console.log(res.data);
        setColors(res.data); // paset'inama info;
      });
  }, []); // masyvas tuščias, nes Front'e nieks nieko neupdate'ins;

  // READ SCOOTERS
  useEffect(() => {
    axios
      .get("http://localhost:3003/front/kolts") // paimama iš serverio;
      .then((res) => {
        console.log(res.data);
        setScooters(res.data); // paset'inama info;
      });
  }, []); // masyvas tuščias, nes Front'e nieks nieko neupdate'ins;

  // CREATE COMMENT
  useEffect(() => {
    if (null === createComment) return;
    axios.post("http://localhost:3003/front/comments", createComment).then((_) => {
      // setLastUpdate(Date.now());
    });
  }, [createComment]); // pasikeičia createComment po mygtuko paspaudimo ir komentaras išsiunčiamas į serverį;

  return (
    <FrontContext.Provider
      value={{
        colors, // info patenka į providerį;
        scooters,
        setCreateComment // paduodam per provider į Scooter.jsx
      }}
    >
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col">
            <FrontList />
          </div>
          <div className="col-right">
            <ScooterList />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;

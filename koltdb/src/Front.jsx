import axios from "axios";
import "./Crud.scss";
import { useEffect, useState } from "react";
import FrontContext from "./Components/front/FrontContext";
import FrontList from "./Components/front/List";
import ScooterList from "./Components/front/ScooterList";

function Front() {
  const [colors, setColors] = useState(null);
  const [scooters, setScooters] = useState(null);

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

  return (
    <FrontContext.Provider
      value={{
        colors, // info patenka į providerį;
        scooters,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-left">
            <FrontList />
          </div>
          <div className="col-left">
            <ScooterList />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;

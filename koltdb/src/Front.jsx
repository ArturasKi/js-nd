import FrontContext from "./Components/front/FrontContext";
import axios from 'axios';
import { useEffect, useState } from "react";
import FrontList from './Components/front/List';

function Front() {

    const [colors, setColors] = useState(null);

    // READ
    useEffect(() => {
        axios.get('http://localhost:3003/front/colors')
        .then(res => {
          console.log(res.data);
          setColors(res.data);
        });
      }, []); // masyvas tuščias, nes Front'e nieks nieko neupdate'ins;

    return (
        <FrontContext.Provider value={{colors}}>
            <div className="container">
                <div className="row">
                    <div className="col-left">
                        <FrontList/>
                    </div>
                </div>
            </div>
        </FrontContext.Provider>
    )
}

export default Front;
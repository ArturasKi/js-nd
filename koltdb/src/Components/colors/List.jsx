import { useContext } from "react";
import Color from "./Color";
import ColorContext from "./ColorContext";

function List() {

  const {colors} = useContext(ColorContext);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>List of colors</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {
            colors ? colors.map((color) => (<Color key={color.id} color={color}></Color>)) : null
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;

import { useContext } from "react";
import ColorContext from "./ColorContext";

function Color({ color }) {

  const {setDeleteData} = useContext(ColorContext);

  const handleDelete = () => {
    setDeleteData(color);
  };

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <span>{color.color}</span>
          <span className="kv" style={{backgroundColor: color.color}}></span>
        </div>
        <div className="buttons">
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Color;

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}

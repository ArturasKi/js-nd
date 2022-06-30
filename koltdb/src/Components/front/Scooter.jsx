import { useState } from "react";
import { useContext } from "react";
import FrontContext from "./FrontContext";

function Scooter({ scooter, color }) {

  const {setDeleteData, setModalData} = useContext(FrontContext);

  const [comment, setComment] = useState(null);

  const handleComment = () => {
    
  }

  return (
    <li className="list-group-item">
      <div className="item-front">
        <div className="content">
          <span>
            ID: <i><b>{scooter.id}</b></i>
          </span>
          <span>
            Reg.Code: <i><b>{scooter.regCode}</b></i>
          </span>
          <span>
            Availability: <b></b>
          </span>
          <span
            className="aps"
            style={
              scooter.isBusy
                ? { backgroundColor: "#FF0000", marginLeft: "-15px" }
                : { backgroundColor: "#00FF21", marginLeft: "-15px" }
            }
          ></span>
          <span>Last Use Time: <i><b>{scooter.lastTimeUsed}</b></i></span>
          <span>
            Total Ride Kilometers: <i><b>{scooter.totalRideKilometres.toFixed(2)}</b></i>km
          </span>
          <span>Color:</span>
          <span className="kv" style={{backgroundColor: scooter.color}}></span>
        </div>
        <div className="content">
          <label className="label">Enter your comment here</label>
          <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
          <div className="buttons">
            <button className="button" onClick={handleComment}>
              Add comment
            </button>
          </div>
        </div>
        
      </div>
    </li>
  );
}

export default Scooter;

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}

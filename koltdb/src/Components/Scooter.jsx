import { useContext } from "react";
import ScooterContext from "./ScooterContext";

function Scooter({ scooter }) {

  const {setDeleteData, setModalData} = useContext(ScooterContext);

  const handleDelete = () => {
    setDeleteData(scooter);
  };

  const handleEdit = () => {
    setModalData(scooter);
  };

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <span>
            ID: <b>{scooter.id}</b>
          </span>
          <span>
            Reg.Code: <b>{scooter.regCode}</b>
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
          <span>Last Use Time: {scooter.lastTimeUsed}</span>
          <span>
            Total Ride Kilometers: <b>{scooter.totalRideKilometres}</b>km
          </span>
        </div>
        <div className="buttons">
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Scooter;

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}

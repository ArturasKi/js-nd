import { useState } from "react";
import { useContext } from "react";
import FrontContext from "./FrontContext";

function Scooter({ scooter, color }) {

  const {setCreateComment} = useContext(FrontContext);

  const [comment, setComment] = useState('');

  const handleComment = () => {
    setCreateComment({comment, scooterId: scooter.id}); 
    // kai paspaudžiamas mygtukas 'comment' nukeliauja į front, useEffect'e pasikeičia createComment;
    // taip pat perduodamas scooterId: scooter.id, kad žinotume, kokiam paspirtukui komentaras priklauso;
    setComment(''); // kai išsiunčiam komentarą - panaikinam textarea komentaro tekstą;
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
          <div
            className="aps"
            style={
              scooter.isBusy
                ? { backgroundColor: "#FF0000", marginLeft: "-15px" }
                : { backgroundColor: "#00FF21", marginLeft: "-15px" }
            }
          ></div>
          <span>Last Use Time: <i><b>{scooter.lastTimeUsed}</b></i></span>
          <span>
            Total Ride Kilometers: <i><b>{scooter.totalRideKilometres.toFixed(2)}</b></i>km
          </span>
          <span>Color:</span>
          <span className="kv" style={{backgroundColor: scooter.color}}></span>
        </div>
        <div className="content">
          <label className="textarea-label">Enter your comment here</label>
          <textarea className="textarea-input" value={comment} onChange={e => setComment(e.target.value)}></textarea>
          <div className="buttons">
            <button className="button" onClick={handleComment}>
              Add comment
            </button>
          </div>
        <ul className="comment-list">
            {
            scooter.comments ? scooter.comments?.slice(0, -5).split('-^o^-,').map((c, i) => <li className="comment" key={i}>{c}</li>) : null
            }
        </ul>
        </div>
        
      </div>
    </li>
  );
}

export default Scooter;

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}

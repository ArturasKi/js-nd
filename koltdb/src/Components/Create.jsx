import { useState } from "react";
import makeId from "../Functions/makeId";

function Create({ setCreateData }) {
  const [regCode, setRegCode] = useState(makeId());

  const handleCreate = () => {
    const obj = {
      regCode,
      isBusy: 0,
      lastTimeUsed: "yyyy-mm-dd",
      totalRideKilometres: 0,
    };
    setCreateData(obj);
    setRegCode(makeId());
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Welcome to "Kolt" scooters!</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="label">Scooter registration code</label>
            <input
              className="input-1"
              type="text"
              value={regCode}
              onChange={(e) => setRegCode(e.target.value)}
            />
          </div>
          <button className="button" onClick={handleCreate}>
            Add new "Kolt"
          </button>
        </div>
      </div>
    </>
  );
}

export default Create;

/* <div className='form-group'>
                <label className='label'>Scooter ...</label>
                <input className='input-1' type='text'></input>
                <small>Enter scooter ... here</small>
              </div>
              <div className='form-group'>
                <label className='label'>Scooter ...</label>
                <input className='input-1' type='text'></input>
                <small>Enter scooter ... here</small>
              </div> */

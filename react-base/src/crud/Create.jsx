import { useState } from 'react';


function Create () {

    const [type, setType] = useState(1);




    return (
        <>
        <div className='card'>
            <div className='card-header'>
              <h2>Create new "Kolt" scooter</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label className='label'>Scooter model</label>
                <select value={type} onChange={e => setType(e.target.value)}>
                  <option>Model K1</option>
                  <option>Model K2</option>
                  <option>Model K3</option>
                </select>
                <small>Enter scooter model here</small>
              </div>
              <div className='form-group'>
                <label className='label'>Scooter ...</label>
                <input className='input-1' type='text'></input>
                <small>Enter scooter ... here</small>
              </div>
              <div className='form-group'>
                <label className='label'>Scooter ...</label>
                <input className='input-1' type='text'></input>
                <small>Enter scooter ... here</small>
              </div>
              <button>Create</button>
            </div>
          </div>
        </>
    );
}

export default Create;
import { useState } from 'react';


function Create ({setCreateData}) {

    const [type, setType] = useState(1);

    const handleCreate = () => {
      const data = {type};
      setCreateData(data);
      setType('1');
  }

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
                  <option value='1'>Model K1</option>
                  <option value='2'>Model K2</option>
                  <option value='3'>Model K3</option>
                </select>
                <small>Select scooter model</small>
              </div>
              
              <button className="button" onClick={handleCreate}>Create</button>
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
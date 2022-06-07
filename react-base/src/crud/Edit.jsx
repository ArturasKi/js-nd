import { useEffect, useState } from 'react';



function Edit ({modalData, setModalData, setEditData}) {

    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate());




    const [lastTimeUsed, setLastTimeUsed] = useState('');
    const [thisDate, setThisDate] = useState(defaultDate);
    const [isBusy, setIsBusy] = useState(0);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        if (null === modalData) {
          return;
        }
        setIsBusy(modalData.isBusy);
        setLastTimeUsed(modalData.lastTimeUsed);
        setThisDate(modalData.thisDate);
        setDistance(modalData.distance);
      }, [modalData]);
      

    const handleEdit = () => {
        const data = {
            id: modalData.id, 
            regCode: modalData.regCode, 
            isBusy, 
            lastTimeUsed, 
            thisDate, 
            distance
        };

        setEditData(data);
        // setIsBusy(0);
        // setLastTimeUsed('');
        // setThisDate(thisDate);
        // setDistance(0);
        setModalData(null);
    }
    if (modalData === null) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h3>Modal title</h3>
                    <button className="close" type="button" onClick={() => setModalData(null)}>
                    <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className="modal-body"></div>
                    <div className='form-group'>
                        <label className='label'>ID number:</label>
                        <input className='input-1' type='text' value={modalData.id} onChange={() => modalData.id}/>
                        <label className='label'>Registration code:</label>
                        <input className='input-1' type='text' value={modalData.regCode} onChange={() => modalData.regCode}/>
                        <label className='label'>Last use time: </label>
                        <input className='input-1' type='text' value={thisDate}/>
                        <label className='label'>New date: </label>
                        <input className='input-1' type='date' onChange={e => setThisDate(new Date(e.target.value))}/>
                        <label className='label'>Total ride km: </label>
                        <input className='input-1' type='text'/>
                        <label className='label'>Total distance km: </label>
                        <input className='input-1' type='text'/>
                        <label className='label'>Is Busy: </label>
                        <input className='checkbox' type='checkbox' checked={isBusy} onChange={() => setIsBusy(isBusy ? false : true)}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="button" type="button" onClick={() => setModalData(null)}>Close</button>
                    <button className="button" type="button" onClick={handleEdit}>Save changes</button>
                </div>
            </div>
        </div>

    )
}

export default Edit;
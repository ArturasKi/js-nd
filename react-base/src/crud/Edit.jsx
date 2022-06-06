import { useEffect, useState } from 'react';


function Edit ({modalData, setModalData, setEditData}) {

    const [lastTimeUsed, setLastTimeUsed] = useState(0);
    const [isBusy, setIsBusy] = useState(0);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        if (null === modalData) {
          return;
        }
        setIsBusy(modalData.isBusy);
        setLastTimeUsed(modalData.lastTimeUsed);
        setDistance(modalData.distance);
      }, [modalData]);
      

    const handleEdit = () => {
        const data = {id: modalData.id, regCode: modalData.regCode, isBusy: isBusy ? 'true' : 'false', lastTimeUsed, totalKm: modalData.totalKm};
        setEditData(data);
        setIsBusy(0);
        setLastTimeUsed('');
        setDistance(0);
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
                        <span>ID: {modalData.id}</span>
                        <input type='text' value={modalData.regCode} onChange={() => modalData.regCode}/>
                        <label>Is Busy: </label>
                        <input type='checkbox' checked={isBusy} onChange={() => setIsBusy(isBusy ? false : true)}/>
                        <span>lastUseTime: {Date.now()}</span>
                        <label>Total Ride Km: </label>
                        <input type='text' value={modalData.totalKm} onChange={() => modalData.totalKm}/>
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
import { useEffect, useState } from 'react';

function Edit ({modalData, setModalData, setEditData}) {

    const [type, setType] = useState(1);

    useEffect(() => {
        if (null === modalData) {
          return;
        }
        setType(modalData.type);
      }, [modalData]);

    const handleEdit = () => {
        const data = {type, id: modalData.id};
        setEditData(data);
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
                    <p>Modal body text</p>
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
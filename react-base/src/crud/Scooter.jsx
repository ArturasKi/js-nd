

function Scooter ({sc, setDeleteData, setModalData}) {

    const handleDelete = () => {
        setDeleteData(sc);
    }

    const handleEdit = () => {
        setModalData(sc);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <span>ID: <b>{sc.id}</b></span>
                    <span>Reg.code: <b>{sc.regCode}</b></span>
                    <span>Availability: <b>{sc.isBusy === 'Free' ? 'Busy' : 'Free'}</b></span>
                    <span>lastUseTime: {sc.lastTimeUsed}</span>
                    <span>totalRideKilometers: <b>{0}</b>km</span>
                </div>
                <div className="buttons">
                    <button className="button" onClick={handleEdit}>Edit</button>
                    <button className="button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Scooter;
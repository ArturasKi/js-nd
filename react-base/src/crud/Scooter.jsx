

function Scooter ({sc, setDeleteData, setModalData}) {

    const handleDelete = () => {
        setDeleteData(sc);
    }

    const handleEdit = () => {
        setModalData(sc);
        console.log(sc);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <span>ID: <b>{sc.id}</b></span>
                    <span>Reg.Code: <b>{sc.regCode}</b></span>
                    <span >Availability: <b></b></span>
                    <span className="aps" style={sc.isBusy ? {backgroundColor: 'green', marginLeft: '-15px'} : {backgroundColor: 'red', marginLeft: '-15px'}}>
                    </span>
                    <span>Last Use Time: {sc.lastTimeUsed}</span>
                    <span>Total Ride Kilometers: <b>{sc.totalRideKilometres}</b>km</span>
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

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}
import makeId from '../functions/makeId';

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
                    <span>ID: {sc.id}</span>
                    <span>regCode: {makeId()}</span>
                    <span>isBusy: Free</span>
                    <span>lastUseTime: {Date.now()}</span>
                    <span>totalRideKilometers: {0} km</span>
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
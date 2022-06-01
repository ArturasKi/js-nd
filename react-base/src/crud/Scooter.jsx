import makeId from '../functions/makeId';

function Scooter ({scooters, setDeleteData}) {

    const handleDelete = () => {
        setDeleteData(scooters);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <span>{['Model K1', 'Model K2', 'Model K3'][scooters.type - 1]}</span>
                    <span>ID: {scooters.id}</span>
                    <span>regCode: {makeId()}</span>
                    <span>isBusy: {scooters.id}</span>
                    <span>lastUseTime: {Date.now()}</span>
                    <span>totalRideKilometers: {0} km</span>
                </div>
                <div className="buttons">
                    <button>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Scooter;
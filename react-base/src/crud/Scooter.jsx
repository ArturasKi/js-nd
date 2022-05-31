function Scooter ({scooters}) {

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <span>{['Model K1', 'Model K2', 'Model K3'][--scooters.type]}</span>
                </div>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Scooter;
import Scooter from "./Scooter";

function List ({scooters}) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>List of scooters</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        scooters ? scooters.map(scooters => <Scooter key={scooters.id} scooters={scooters}></Scooter>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;
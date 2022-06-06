import Scooter from "./Scooter";

function List ({scooters, setDeleteData, setModalData}) {

    return (
        <div className="card">
            <div className="card-header">
                <h2>List of scooters</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        scooters ? scooters.map(sc => <Scooter key={sc.id} sc={sc} setDeleteData={setDeleteData} setModalData={setModalData}></Scooter>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;
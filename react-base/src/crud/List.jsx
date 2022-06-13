import Scooter from "./Scooter";


function List ({scooters, setDeleteData, setModalData, sortScooters}) {

    return (
        <>
        <div className="card">
            <div className="card-header">
                <h2>List of scooters</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        sortScooters === '1' ? scooters === null ? null : [...scooters].map(sc => <Scooter key={sc.id} sc={sc} setDeleteData={setDeleteData} setModalData={setModalData}></Scooter>) : null
                    }
                    {
                        sortScooters === '2' ? scooters === null ? null : [...scooters].sort((a, b) => (b.totalRideKilometres - a.totalRideKilometres)).map(sc => <Scooter key={sc.id} sc={sc} setDeleteData={setDeleteData} setModalData={setModalData}></Scooter>) : null
                    }
                    {
                        sortScooters === '3' ? scooters === null ? null : [...scooters].sort((a, b) => a.lastTimeUsed.localeCompare(b.lastTimeUsed)).map(sc => <Scooter key={sc.id} sc={sc} setDeleteData={setDeleteData} setModalData={setModalData}></Scooter>) : null
                    }
                </ul>
            </div>
        </div>
        </>
    );
}

export default List;
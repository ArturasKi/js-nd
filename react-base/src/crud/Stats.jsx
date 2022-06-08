
function Stats ({scooters}) {

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h2>Basic scooters data</h2>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <p>Number of scooters: 
                            {
                                scooters === null ? null : scooters.length
                            } 
                        </p>
                    </div>
                    <div className='form-group'>
                        <p>Total kilometers of all scooters: 
                            {
                                scooters === null ? null : scooters.reduce((total, item) => (total + +(Number(item.totalRideKilometres)).toPrecision(4)), 0)   
                            } km
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats;
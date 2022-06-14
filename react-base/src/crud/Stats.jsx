function Stats({ scooters }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Basic scooters data</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>
              Number of scooters:
              <b>{scooters === null ? null : scooters.length}</b>
            </p>
          </div>
          <div className="form-group">
            <p>
              Total kilometers of scooters:
              <b>{scooters === null
                ? null
                : (scooters.reduce((total, item) => (total + (+item.totalRideKilometres)), 0)).toFixed(2)
                }
              km</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;

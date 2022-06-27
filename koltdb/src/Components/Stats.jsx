function Stats({ scooters }) {
  return (
    <>
      <div className="form-group">
        <h5>
          Number of scooters:{" "}
          <b>{scooters === null ? null : scooters.length}</b>
        </h5>
      </div>
      <div className="form-group">
        <h5>
          Number of free scooters:{" "}
          <b>
            {scooters === null
              ? null
              : scooters.reduce((total, item) => total + !item.isBusy, 0)}
          </b>
        </h5>
      </div>
      <div className="form-group">
        <h5>
          Total kilometers:{" "}
          <b>
            {scooters === null
              ? null
              : scooters
                  .reduce((total, item) => total + +item.totalRideKilometres, 0)
                  .toFixed(2)}{" "}
            km
          </b>
        </h5>
      </div>
    </>
  );
}

export default Stats;

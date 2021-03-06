import { scootersSort } from "../functions/localStorage";

function Sorting({ sortScooters, setSortScooters }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Sort</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <select
              className="select-opt"
              value={sortScooters}
              onChange={(e) => {
                setSortScooters(e.target.value);
                scootersSort(e.target.value);
                console.log("Opa");
              }}
            >
              <option value="1">ID</option>
              <option value="2">Max km</option>
              <option value="3">Min km</option>
              <option value="4">Last used</option>
              <option value="5">Availability</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sorting;

// const handleSort = () => {
//     const sortedData = [...sortScooters].sort((a, b) => {
//         return (b.totalRideKilometres - a.totalRideKilometres)
//     });
//     setSortScooters(sortedData);
//     console.log('Kuku')
// }

// const listScooters = sortScooters.map((object) => {
//     return <Scooter key={object.id} sc={sc} setDeleteData={setDeleteData} setModalData={setModalData}></Scooter>
// });

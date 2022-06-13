import { scootersSort } from "../functions/localStorage";


function Sorting({ sortScooters, setSortScooters }) {
  return (
    <>
      <div>
        <div>
          <label>Sort </label>
          <br/>
          <select
            value={sortScooters}
            onChange={(e) => {
                setSortScooters(e.target.value);
                scootersSort(e.target.value);
                console.log('Opa')
            }}
          >
            <option value="1">ID</option>
            <option value="2">Total km</option>
            <option value="3">Last use time</option>
          </select>
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

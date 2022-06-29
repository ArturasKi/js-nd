function Color({ color }) {

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <span>{color.color}</span>
          <span className="kv" style={{backgroundColor: color.color}}></span>
        </div>
      </div>
    </li>
  );
}

export default Color;

//{sc.isBusy ? 'Free' : 'Busy'}
// style={sc.isBusy ? {color: 'green'} : {color: 'red'}}

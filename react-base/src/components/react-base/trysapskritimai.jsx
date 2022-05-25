import randColor from '../../functions/randColor';
import { useRef } from 'react';

function Trysapskritimai() {
    const apsRand = useRef(null);
    const changeColor = () => {
      apsRand.current.style.background = randColor();
    };
    return (
        <>
            <div ref={apsRand} class='aps' style={{background: randColor()}}>1</div>
            <div ref={apsRand} class='aps' style={{background: randColor()}}>2</div>
            <div ref={apsRand} class='aps' style={{background: randColor()}}>3</div>
            <button onClick={changeColor}>PAKEISTI</button>
        </>
    )
}

export default Trysapskritimai;
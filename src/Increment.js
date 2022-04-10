import React, {useState} from "react";
import './App.css';
import './App.js';

const Increment = () =>{
  const [counter2, setCounter2] = useState(0)
  const handleClicks10 = () => {
    setCounter2(0);
  }
  const handleClicks1 = () => {
    setCounter2(counter2 + 1);
  }
  const handleClicks2 = () => {
    setCounter2(counter2 + 2);
  }
  const handleClicks3 = () => {
    setCounter2(counter2 + 3);
  }
  const handleClicks4 = () => {
    setCounter2(counter2 + 4);
  }
  const handleClicks5 = () => {
    setCounter2(counter2 + 5);
  }
  const handleClicks6 = () => {
    setCounter2(counter2 + 6);
  }
  const handleClicks7 = () => {
    setCounter2(counter2 + 7);
  }
  const handleClicks8 = () => {
    setCounter2(counter2 + 8);
  }
  const handleClicks9 = () => {
    setCounter2(counter2 + 9);
  }

return(
<div>
<div id="second">       
    <p>Lets add numbers!
      <br></br>
      {counter2}
    </p>
    <div className ="buttons">
    <button onClick={handleClicks10}>Reset</button><br></br>
      <button onClick={handleClicks1}>1</button>
      <button onClick={handleClicks2}>2</button>
      <button onClick={handleClicks3}>3</button>
      <button onClick={handleClicks4}>4</button>
      <button onClick={handleClicks5}>5</button>
      <button onClick={handleClicks6}>6</button>
      <button onClick={handleClicks7}>7</button>
      <button onClick={handleClicks8}>8</button>
      <button onClick={handleClicks9}>9</button>
      </div>
    </div>
    </div>
);
}

export default Increment;
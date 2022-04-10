import React, {useState} from "react";
import './App.css';
import './App.js';

const Decrement = () =>{
    const [counter3, setCounter3] = useState(10)
  const handleClicks10 = () => {
    setCounter3(10);
  }
  const handleClicks1 = () => {
    setCounter3(counter3 - 1);
  }
  const handleClicks2 = () => {
    setCounter3(counter3 - 2);
  }
  const handleClicks3 = () => {
    setCounter3(counter3 - 3);
  }
  const handleClicks4 = () => {
    setCounter3(counter3 - 4);
  }
  const handleClicks5 = () => {
    setCounter3(counter3 - 5);
  }
  const handleClicks6 = () => {
    setCounter3(counter3 - 6);
  }
  const handleClicks7 = () => {
    setCounter3(counter3 - 7);
  }
  const handleClicks8 = () => {
    setCounter3(counter3 - 8);
  }
  const handleClicks9 = () => {
    setCounter3(counter3 - 9);
  }

    return(
        
    <div>
    <div id="third">    
    <p>Lets subtract numbers!
      <br></br>
      {counter3}
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

export default Decrement;
import './App.css';
import Decrement from './Decrement.js';
import Increment from './Increment';
import React, {useState} from "react";

const App = () =>{
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1);
  }
  const handleClick2 = () => {
    setCounter(counter - 1);
  }
  const handleClick3 = () => {
    setCounter(0);
  }
  return(
  <div>
    <div id="hdiv">
      <img id="img1" src='https://www.maxpixel.net/static/photo/2x/Counting-Numbers-Education-Math-Numbers-Creativity-4014181.jpg' alt='img1'></img>
      <img id="img2" src='https://www.fluentu.com/blog/wp-content/uploads/2016/09/thinking-in-a-foreign-language-e1479154410182.png' alt='img2'></img>
      <img id="img3" src='https://i.pinimg.com/originals/31/2e/ee/312eee81a934fcc60b026b82cc4d9d72.jpg' alt='img3'></img>
    </div>
    <div  id="first">
    <p>Increment/Decrement<br></br>
    {counter}
    </p>
    <div className ="buttons">
      <button onClick={handleClick1}>Add</button>
      <button onClick={handleClick3}>Reset</button>
      <button onClick={handleClick2}>Minus</button>

    </div>
    </div>

    <Increment />
    <Decrement />
    
  </div>
);
}

export default App;


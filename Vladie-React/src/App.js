import './App.css';
//use state
import { useState } from 'react';

//exercise
//increase,decrease and reset Number

function App() {
  const [count, setCount] = useState(0);
  

  const increaseAge = () => {
    setCount(count+1);
  };
  const decreaseAge = () => {
    setCount(count-1);
  };
  const resetAge = () => {
    setCount(0);
  };
return (
    <div className="App">
      <div>
      {count}
      </div>
      <button onClick={decreaseAge}>Decrease</button>
      <button onClick={resetAge}>RESET</button>
      <button onClick={increaseAge}>Increase</button>   
    </div>

  );
}

//input change value method 2 = Toggle Color
// function App() {
//   const [textColor, setTextColor] = useState(true);
  
//   return (
//     <div className="App">
//       <button onClick={() => {
//         setTextColor(textColor === "white" ? "green" : "white");
//           }}>
//             SHOW/HIDE
//       </button>
//       <h1 style={{color: textColor}}>Hi my Name is Vladie</h1>
      
//     </div>

//   );
// }

//input change value method 2 = Toggle show/hide
// function App() {
//   const [showText, setShowText] = useState(true);
  
//   return (
//     <div className="App">
//       <button onClick={() => {
//         setShowText(!showText)
//           }}>
//             SHOW/HIDE
//       </button>
//       {showText && <h1>Hi my Name is Vladie</h1> }
      
//     </div>

//   );
// }

//input change value method 1
// function App() {
//     const [inputValue, setInputValue] = useState();
    
//     const handleInputChange = (event) => {
//       setInputValue(event.target.value);
//     }
//     return (
//       <div className="App">
//         <input type="text" onChange={handleInputChange} />
//         {inputValue}
        
//       </div>

//     );
// }

//increase,decrease and reset Number

// function App() {
//   const [age, setAge] = useState();
  

//   const increaseAge = () => {
//     setAge(age+1);
//   };
//   const decreaseAge = () => {
//     setAge(age-1);
//   };
//   const resetAge = () => {
//     setAge(0);
//   };
// return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}> Increase AGE </button>
//       <button onClick={decreaseAge}> Increase AGE </button>
//       <button onClick={resetAge}> RESET </button>
      
//     </div>

//   );
// }


export default App;

import './App.css';
//import { User } from './User';

function App() {
    //const age = 18;
    //const isGreen = true;
    //const names = ["Vladimir","Lenie Rose","Liam Vleir"," Vynce Skyler","Tabuyo"]
    const planet = [
          { name: "Mars",  isGasEmitting: false },
          { name: "Earth",  isGasEmitting: false },
          { name: "Jupiter",  isGasEmitting: true },
          { name: "Venus",  isGasEmitting: false },
          { name: "Neptune",  isGasEmitting: true },
          { name: "Uranus",  isGasEmitting: true },
        ];

      //showing names and selection
      return (
      <div className="App">
      {planet.map (
        (planet, key) => planet.isGasEmitting && <h1> {planet.name}</h1>
        //notgas
        //(planet, key) => !planet.isGasEmitting && <h1> {planet.name}</h1>
      )}
      </div>
    );
}
    // method 1
    /*
    if (age >= 18) {
      return <h1> OVER AGED! </h1>;
    } else {
      return <div className="App">
      UNDER AGED!
      </div>;
    }
    */

    //method 2
   /*
    return (
      <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE!</h1> }
      </div>
    );
    */

    //method 3 boolean
    /*
    return (
      <div className="App">  
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE!</h1> }
        <h1 style={{ color: isGreen ? "green" : "red"}}> THIS HAS COLOR </h1>
        

      {isGreen && <button style={{color: 'green'}}> GREEN BUTTON </button>}

      {names.map ((name, key) => {
          return <h1 key={key}> {name} </h1>
          }
        )
      }

      </div>
    );
     */
    

   
  
   


export default App;

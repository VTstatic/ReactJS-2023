import logo from './luffygatling.gif';
import logo2 from './logo192.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User name="Vladie" age={33} email="vladie@tabuyo.com" />
        <img src={logo} className="App-logo" alt="luffy" />
        <User name="Lenie" age={28} email="Lenie@tabuyo.com" />
        <img src={logo2} className="App-logo1" alt="logo" />
        <User name="yamvin" age={16} email="yamvin@tabuyo.com" />
      </header>
    </div>
  );
}

const User = (props) => {
    return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
      </div>)
}; 
export default App;

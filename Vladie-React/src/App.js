import './App.css';

function App() {
  return (
    <div className="App">
      <Client idNumber={1111} name="Vladimir Tabuyo" country="Philippines" />
      <Client idNumber={1112} name="Lenie Rose Tabuyo" country="Philippines" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Client = (props) => {
  return (
    <div>
      <h1>{props.idNumber}</h1><h2>{props.name}</h2><h2>{props.country}</h2>
    </div>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1><h2>{props.position}</h2><h2>{props.company}</h2>
    </div>
  );
}


export default App;

import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  // const style = {
  //   color: "red",
  //   backgroundColor: 'cyan'
  // }
  // const person1={
  //   name: "Ovijit karmoker",
  //   job: "Student"
  // }
  // const person2 = {
  //   name: "Sharmin Shama",
  //   job: "Data Entry"
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <h2 style = {style}>Name: {person1.name+" "+person1.job}</h2>
        <h2 style={{color: "pink", backgroundColor: "red"}}>Name: {person2.name+" "+person2.job}</h2> */}
        <p>My first react app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

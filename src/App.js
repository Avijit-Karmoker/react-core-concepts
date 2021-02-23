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
  const products = [
    {name: 'Photoshop', price: "$99.99"},
    {name: 'Illustrator', price: "$99.99"},
    {name: 'PDF Reader', price: "$99.99"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <Products name = {products[0].name} price = {products[0].price}></Products> */}
        {/* <Products product = {products[1]}></Products> */}
        <Products product = {products[2]}></Products>
        <Person name = "Ovijit" job = "Student"></Person>
        <Person name = "Shama" job = "Data Entry"></Person>
        <Person name = {name[0]} job = {job[0]}></Person>
        <Person name = {name[2]} job = {job[2]}></Person>
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
function Products(props){
  const style = {
    border: "5px solid red",
    borderRadius: "10px",
    padding: "30px",
    margin: '10px',
    height: '300px',
    width: '300px'
  }
  const {name, price} = props.product;
  return(
    <div style = {style}>
      {/* <h3>{props.name}</h3>
      <h1 style = {{color: 'red'}}>{props.price}</h1>  1st way */}

      {/* <h3>{props.product.name}</h3>
      <h1 style = {{color: 'red'}}>{props.product.price}</h1> 2nd way */}

      <h3>{name}</h3>
      <h1 style = {{color: 'red'}}>{price}</h1> {/* 3rd way */}
    </div>
  )
}
const name = ['Himel', 'Tinni', 'Rezaul'];
const job = ['Student', 'Graphics Designer', 'Gamer']
function Person(props){
  const style = {
    color: '#fff',
    backgroundColor: 'green',
    border: "5px solid orange",
    borderRadius: "10px",
    padding: "30px",
    margin: '10px'
  }
  return(
    <div style = {style}>
      <h1>Name: {props.name}</h1>
      <h4>Job: {props.job}</h4>
    </div>)
}

export default App;

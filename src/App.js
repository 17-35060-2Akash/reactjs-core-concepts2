import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      {/* <p>{users.length}</p> */}
      {/* {
        users.map(user => <li>{user.name}</li>)
      } */}
      {
        users.map(user => <User name={user.name} email={user.email} username={user.username} city={user.address.city}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className='product'>
      <h3>name:{props.name}</h3>
      <p>Email: {props.email}</p>
      <p>username: {props.username}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);



  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

/* 

 const products = [
    { name: 'Laptop', price: '50000' },
    { name: 'Phone', price: '20000' },
    { name: 'Smart-Watch', price: "15000" },
    { name: 'Tablet', price: "5000" }

  ];

<Product name="Laptop" price="50000"></Product>
      <Product name="Phone" price="20000"></Product>
      <Product name="Smart-Watch" price="15000"></Product>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */


/* function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
} */

export default App;

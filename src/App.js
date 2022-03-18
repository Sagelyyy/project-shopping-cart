import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <div className='nav--container'>
        <h1 className='nav--title'>IDFK</h1>
        <span className="material-icons-outlined shoppingCart">shopping_cart</span>
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          backgroundColor: "#a8dee6"
        }}
      >
        <div className='nav--links--container'>
          <Link to="/home">Home</Link> | {" "}
          <Link to="/store">Store</Link> | {" "}
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

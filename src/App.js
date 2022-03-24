import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom"

function App(props) {

  console.log(props.cartNumber)

  const style = {
    'fontSize': '13px',
    'position': 'absolute',
    'display': 'float',
    'alignSelf': 'center',
    'textAlign': 'center',
    'backgroundColor': '#e6b0a8',
    'borderRadius': '50%',
    'width': '18px',
    'height': '18px',
    'left': '96.5%',
    'top': '0.5%',
  }

  return (
    <div className="App">
      <div className='nav--container'>
        <h1 className='nav--title'>Fantasy Costco</h1>
        <div className='nav--badge'>
          <Link to="/checkout"><p style={props.cartNumber ? style : null} className='nav--cart--count'>{props.cartNumber < 99 ? props.cartNumber > 0 ? props.cartNumber : null : '...'}</p>
            <span style={props.cartNumber ? {color: '#b38079'} : null}className="material-icons-outlined shoppingCart">shopping_cart</span></Link>
        </div>
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

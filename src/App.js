import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom"

function App(props) {

  const style = {
    'fontSize': '13px',
    'position': 'absolute',
    'display': 'float',
    'alignSelf': 'center',
    'textAlign': 'center',
    'backgroundColor': 'white',
    'borderRadius': '50%',
    'border': '2.5px solid #0049b3',
    'width': '18px',
    'height': '18px',
    'left': '96.5%',
    'top': '0.5%',
    'color': '#0049b3',
    'fontWeight': 'bold',
  }

  return (
    <div className="App">
      <div className='nav--container'>
        <div className='nav--badge'>
          <Link to="/checkout"><p style={props.cartNumber ? style : null} className='nav--cart--count'>{props.cartNumber < 99 ? props.cartNumber > 0 ? props.cartNumber : null : '...'}</p>
            <span style={props.cartNumber ? {color: '#0049b3'} : null}className="material-icons-outlined shoppingCart">shopping_cart</span></Link>
        </div>
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          backgroundColor: "#EEEEEE"
        }}
      >
        <div className='nav--links--container'>
          <Link className="nav--link" to="/home">Home</Link> | {" "}
          <Link className="nav--link"to="/store">Store</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

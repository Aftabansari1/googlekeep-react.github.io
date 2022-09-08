import React from 'react';
import logo from "./images/rocket.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width='50' height='50'/>
        <h1>Aftab keep</h1>
      </div>
    </>
  )
}

export default Header

import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header className="header">
		<div class="left">
			<a href="#">Hufficorns</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">Mint</Link>
    </li>
    <li>
      <Link to="/cats">Join</Link>
    </li>
    <li>
      <Link to="/sheeps">Create</Link>
    </li>
		</ul>
   
  </div>
	<div class="right">
          <a href="#">Connect</a>
        </div>

    </header>
  );
}
export default Navbar;
import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import getWeb3 from "./getWeb3";

const Navbar= () =>{

   async function getLibrary() {
    const web3 = await getWeb3();
    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  }
  
  return (
    <header className="header">
        <div className="left">
          <a href="#">Hufficorns</a>
        </div>
        <div className="mid">
          <ul className="navbar">
            <li>
              <Link to="/">Mint</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
            <li>
              <Link to="/nft">My NFT</Link>
            </li>
          </ul>

        </div>
        <div className="right">
          <button onClick={() => getLibrary()}>Connect</button>
        </div>

      </header>
  );
}
export default Navbar;
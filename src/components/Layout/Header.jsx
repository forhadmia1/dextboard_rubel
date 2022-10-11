import React from "react";
import star from "../../images/star.svg";
import setting from "../../images/setting.svg";
import ether from "../../images/etheriaum.svg";
import search from "../../images/searchIcon.svg";
import bottomArrow from "../../images/downarrow.svg";
import { Link } from "react-router-dom";
import "../../style/header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <div class="flex items-center input-field gap-3">
          <span>
            <img src={search} alt="" />
          </span>
          <input
            type="text"
            className="input"
            placeholder="Username"
          />
        </div>
      </div>
      <div className="right">
        <Link to="/" className="icon">
          <img src={star} alt="" />
        </Link>
        <Link to="/" className="icon">
          <img src={setting} alt="" />
        </Link>
        <div className="eth-button-wrapper">
          <div className="eth-btn active-eth-btn">
            <img className="eth-icon" src={ether} alt="/" />
            <span>Ethereum</span>
            <img src={bottomArrow} alt="" />
          </div>
          <div className="gas-btn">
            <span>ETH: $1,361.52</span>
            <span>Gas Fee: 22</span>
          </div>
        </div>
        <div>
          <button className="side-btn">Update</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

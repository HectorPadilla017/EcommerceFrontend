import React, { useRef } from "react";
// import Modal from "../../Components/Modal";
import IcecreamIcon from "@mui/icons-material/Icecream";

// import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const Navbar = (props) => {
  return (
    <div className="navbar">
      <header className="nav">
        <div className="contflex1">
          <a className="subtitle logo" href="#Banner">
            <IcecreamIcon fontSize="small" />
            BE<strong>ICECREAM</strong>
          </a>
          <a className="menu">
            <ViewStreamIcon fontSize="large" onClick={() => props.onDrawer()} />
          </a>
          <ul className="contnav">
            <li>
              <a href="#Products">
                <p>Products</p>
              </a>
            </li>
            <li>
              <a href="#Info">
                <p>How it's made?</p>
              </a>
            </li>
            <li>
              <a href="#Counter">
                <p>Our history</p>
              </a>
            </li>
            <li>
              <a href="#Reviews">
                <p>About us</p>
              </a>
            </li>
            <li>
              <a href="#Footer">
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="contflex2">
          <ul className="contnav">
            <li className="search">
              <div className="control has-icons-right">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-small is-right">
                  <SearchIcon className="ic" />
                </span>
              </div>
            </li>
            <li className="icons">
              <a onClick={() => props.register.current.open()}>
                <PersonIcon fontSize="small" />
              </a>
            </li>
            <li className="icons">
              <a>
                <ShoppingBagIcon
                  fontSize="small"
                  onClick={() => props.onCart()}
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

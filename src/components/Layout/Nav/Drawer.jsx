import React from "react";
import IcecreamIcon from "@mui/icons-material/Icecream";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

import Blueberries from "../../img/blueberries.jpg";

const Drawer = (props) => {
  return (
    <section className="containerDrawer" id="Drawer">
      <header>
        <a className="subtitle logo" href="#Banner">
          <IcecreamIcon fontSize="small" />
          BE<strong>ICECREAM</strong>
        </a>
        <a>
          <ViewStreamIcon fontSize="large" onClick={() => props.onDrawer()} />
        </a>
      </header>
      <hr />
      <div className="user">
        <div className="avatar">
          <img src={Blueberries} alt="Blueberries" />
        </div>
        <div className="name conText small">
          <h6>Hector Padilla Perez</h6>
        </div>
      </div>
      <hr />
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
    </section>
  );
};

export default Drawer;

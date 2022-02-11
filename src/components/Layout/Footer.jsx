import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="container containerFooter" id="Footer">
      <div className="footer">
        <div className="contact">
          <div className="titles">
            <h6 className="subtitle">
              HOMEMADE ICE CREAMS
              <br />
              CREATED WITH
            </h6>
            <h4 className="title">LOVE & FUN!</h4>
          </div>
          <div className="social">
            <div className="redes">
              <a>
                <FacebookIcon className="ico" />
              </a>
              <a>
                <InstagramIcon className="ico" />
              </a>
              <a>
                <TwitterIcon className="ico" />
              </a>
            </div>
            <div className="conText small">
              <p>
                Feel free to call <strong>+61 (0) 383 766 284</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="footerEnd">
          <div className="conText small pag">
            <a href="#Products">
              <p>Products</p>
            </a>
            <a href="#Info">
              <p>How it's made?</p>
            </a>
            <a href="#Counter">
              <p>Our history</p>
            </a>
            <a href="#Reviews">
              <p>About us</p>
            </a>
            <a href="#Footer">
              <p>Contact us</p>
            </a>
          </div>
          <div className="conText small copy">
            <p>@Copyright {new Date().getFullYear()} / Desarrollado por Héctor Padilla </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

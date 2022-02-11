import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

window.addEventListener("scroll", function () {
  let header = document.querySelector(".social");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const SocialNetworks = () => {
  return (
    <div className="socialNetworks">
      <header className="social">
        <a>
          <FacebookIcon />
        </a>
        <a>
          <InstagramIcon />
        </a>
        <a>
          <TwitterIcon />
        </a>
      </header>
    </div>
  );
};

export default SocialNetworks;

import React from "react";
import InputPassword from "../../Components/InputPassword";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const SignIn = () => {
  return (
    <div className="containerSignIn">
      <div className="titles">
        <h4 className="title">SIGN IN</h4>
      </div>
      <form action="" autoComplete="on">
        <div className="inputIcon">
          <MailOutlineIcon className="icon" />
          <input type="email" placeholder="Email" name="email" id="" required />
        </div>
        <InputPassword />
        <input className="submit" type="submit" value="SIGN IN" />
      </form>
    </div>
  );
};

export default SignIn;

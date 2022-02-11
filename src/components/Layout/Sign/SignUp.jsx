import React from "react";
import InputPassword from "../../Components/InputPassword";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const SignUp = () => {
  return (
    <div className="containerSignUp">
      <div className="titles">
        <h4 className="title">CREATE ACCOUNT</h4>
      </div>
      <form action="" autoComplete="on">
        <div className="inputIcon">
          <PersonOutlineIcon className="icon" />
          <input type="text" placeholder="Name" required />
        </div>
        <div className="inputIcon">
          <MailOutlineIcon className="icon" />
          <input type="email" placeholder="Email" name="email" id="" required />
        </div>
        <div className="inputIcon">
          <PhoneIcon className="icon" />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone"
            minLength={8}
            maxLength={13}
            // pattern="^(0052|\\+52)?(\d{2})-? ?(\d{2})-? ?(\d{2})-? ?(\d{2})$"
            // pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            id=""
            required
          />
        </div>
        <InputPassword />
        <input className="submit" type="submit" value="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;

import React from "react";

import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const InputPassword = () => {
  const ShowPass = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("vOff").style.display = "none";
      document.getElementById("vOn").style.display = "initial";
    } else {
      x.type = "password";
      document.getElementById("vOff").style.display = "initial";
      document.getElementById("vOn").style.display = "none";
    }
  };

  return (
    <div className="inputPassword">
      <LockIcon className="icon" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        required
      />
      <a onClick={() => ShowPass()}>
        <VisibilityOffIcon id="vOff" className="visi Off"  />
        <VisibilityIcon id="vOn" className="visi On" />
      </a>
    </div>
  );
};

export default InputPassword;

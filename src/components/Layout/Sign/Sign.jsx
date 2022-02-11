import React, {useState} from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import foto from "../../img/pomegranate.jpg";

const Sign = () => {
  const [sign, setSign] = useState(SignIn)
  return (
    <section className="containerSign">
      <img src={foto} alt="Logo" />
      <div className="sign">
        <div className="signButton">
          <button className="signIn" onClick={() => setSign(SignIn)}>Sign In</button>
          <button className="signUp" onClick={() => setSign(SignUp)}>Sign Up</button>
        </div>
        {sign}
      </div>
    </section>
  );
};

export default Sign;

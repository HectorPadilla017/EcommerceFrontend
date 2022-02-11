import React, { useRef } from "react";
import Modal from "./components/Components/Modal";

import Nav from "./components/Layout/Nav/Nav";
import Sign from "./components/Layout/Sign/Sign"
// import Register from "./components/Layout/Register"
// import Login from "./components/Layout/Login"
import SocialNetworks from "./components/Layout/SocialNetworks";
import Home from "./components/pages/Home";
import Footer from "./components/Layout/Footer";

import "./sass/main.scss";

function App() {
  const modal1 = useRef(null);
  // const modal2 = useRef(null);
  // const Register = () => {
  //   document.getElementById("Register").classList.toggle("activeRegister");
  // };
  return (
    <>
      {/* <button onClick={() => modal.current.open()}>Open me</button> */}
      <Modal ref={modal1}><Sign/></Modal>
      <Nav register={modal1} />
      <SocialNetworks />
      <Home />
      <Footer />
    </>
  );
}

export default App;

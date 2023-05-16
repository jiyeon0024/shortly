import React from "react";
import "./Nav.style.css";
import Button from "./Button.jsx";
import { useState } from "react";
import SignUpModal from "./SignUpModal";

function Nav() {
  const [showModal, setShowModal] = useState(false);
  function checkModal() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }
  return (
    <nav className="nav">
      <p>Shortly</p>
      <Button onClick={checkModal}>Sign Up</Button>

      {showModal ? <SignUpModal closeModal={checkModal}></SignUpModal> : null}
    </nav>
  );
}

export default Nav;

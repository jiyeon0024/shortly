import { FiX } from "react-icons/fi";
import "./SignUpModal.css";
import TextInput from "./TextInput";
import Button from "./Button";

function SignUpModal(props) {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="wrapTitle">
          <h3>Sign Up to Shortly!</h3>
          <div>
            <FiX className="closeIcon" onClick={props.closeModal}></FiX>
          </div>
        </div>
        <div className="wrapInfo">
          <h2 className="infos">Full Name:</h2>
          <TextInput className="modalInput"></TextInput>
          <h2 className="infos">Email:</h2>
          <TextInput className="modalInput"></TextInput>
          <h2 className="infos">Password:</h2>
          <TextInput className="modalInput"></TextInput>
          <h2 className="infos">Confirm Password:</h2>
          <TextInput className="modalInput"></TextInput>
        </div>
        <Button className="btn3 modalBtn">Sign up</Button>
      </div>
    </div>
  );
}

export default SignUpModal;

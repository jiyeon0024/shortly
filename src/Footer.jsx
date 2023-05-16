import TextInput from "./components/TextInput";
import Button from "./components/Button";
import "./Footer.css";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="wrapFooter">
        <div className="aboutUs">
          <h3 className="title">About Us</h3>
          <p className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            enim ipsum laudantium velit voluptates sit, veniam, quod similique
            delectus voluptatibus tempora ullam odio fugit eveniet aspernatur
            sunt. Rem, nulla nobis!
          </p>
        </div>
        <div className="contact">
          <h3 className="title">Contact</h3>
          <div className="contactInfo">
            <div className="flex1">
              <AiFillPhone size={25} />

              <p className="contactInfoList">+8210123456789</p>
            </div>
            <div className="flex1">
              <AiFillMail size={25} />

              <p className="contactInfoList">info@shortly.com</p>
            </div>
            <div className="flex1">
              <BsFillGeoAltFill size={25} />

              <p className="contactInfoList">
                123 Shortly Street, Gangnam-gu, Seoul
              </p>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <h3 className="title">Subscribe</h3>
          <p className="subPara">
            Enter your email to subscribe to our newsletter
          </p>
          <TextInput
            className="footerInput"
            placeholder={"Enter your email"}
          ></TextInput>
          <div className="flex1">
            <input type="checkbox" className="checkBox" />
            <p className="policyPara">Agree to privacy policy</p>
          </div>
          <Button className="btn3">Join</Button>
        </div>
      </div>
      <p className="copyRight">© Shortly 2023 by Jiyeon</p>
    </div>
  );
}
export default Footer;

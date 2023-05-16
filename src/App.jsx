import Nav from "./components/Nav.jsx";
import "./App.css";
import SearchBar from "./SearchBar.jsx";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import Cards from "./Cards.jsx";
import { BiAccessibility } from "react-icons/bi";
import { BsFillLightningFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { FaExpeditedssl } from "react-icons/fa";
import Footer from "./Footer.jsx";

const content = [
  {
    id: 1,
    icon: <BsFillLightningFill size={40} className="icon1" />,
    title: "Easy to Use",
    description:
      "Enter your URL, hit the button, and get your link! It's as easy as that!",
  },
  {
    id: 2,
    icon: <BsDownload size={40} className="icon1" />,
    title: "Save Your Links",
    description: "Get access to all of your shortened links with ease.",
  },
  {
    id: 3,
    icon: <FaExpeditedssl size={40} className="icon1" />,
    title: "Unlimited Access",
    description:
      "Sign up for a free account to get unlimited shortening privileges!",
  },
];

function App() {
  return (
    <>
      {/* navbar */}
      <Nav></Nav>

      <div className="wrapBox">
        <h1 className="para1">THANKS FOR USING SHORTLY</h1>
        <h5 className="para2">Shorten your URL Quickly and Easily.</h5>
        <h1 className="para3">
          Enter your URL below and click go to get your awesomely shortened
          link, it's that easy!
        </h1>
        {/* searchBar */}
        <SearchBar></SearchBar>
      </div>

      {/* cards */}
      <div className="wrapCard">
        {content.map(function (props) {
          return (
            <Cards
              icon={props.icon}
              title={props.title}
              description={props.description}
            />
          );
        })}
      </div>

      {/* urlList */}
      <h5 className="myUrls">My URLs</h5>
      <p className="default">You currently have no URLs saved.</p>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;

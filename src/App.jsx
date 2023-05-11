import Nav from "./components/Nav.jsx";
import "./App.css";
import SearchBar from "./SearchBar.jsx";

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
      {/* urlList */}
      {/* footer */}
    </>
  );
}

export default App;

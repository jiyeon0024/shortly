import TextInput from "./components/TextInput";
import Button from "./components/Button";
import "./SearchBar.css";
import { useState } from "react";
function searchBar() {
  const [url, setUrl] = useState("");
  console.log(url);
  return (
    <div className="wrap">
      <TextInput
        type="text"
        className={"textInput"}
        placeholder={"Eter your URL"}
        onChange={(e) => setUrl(e.target.value)}
      ></TextInput>
      <Button className="btn2">Go!</Button>
    </div>
  );
}
export default searchBar;

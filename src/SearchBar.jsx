import TextInput from "./components/TextInput";
import Button from "./components/Button";
import "./SearchBar.css";
import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

function searchBar(props) {
  const [url, setUrl] = useState("");
  const [error, setErr] = useState("");
  const [urlModal, setUrlModal] = useState(false);
  const [data, setData] = useState("");

  // const List = [
  //   {
  //     original: "",
  //     new: "",
  //   },
  //   {
  //     original: "",
  //     new: "",
  //   },
  //   {
  //     original: "",
  //     new: "",
  //   },
  // ];

  function checkUrlModal() {
    if (urlModal) {
      setUrlModal(false);
    } else {
      setUrlModal(true);
    }
  }
  function getUrl() {
    setErr("");
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((data) => data.json())
      .then((data) => {
        if (!data.ok) {
          throw data.error;
        }
        setUrlModal(true);
        setData(data.result.short_link);
        const url = {
          new: data.result.short_link,
          original: data.result.original_link,
        };
        props.onSuccess(url);
        setUrl("");
      })
      .catch((error) => setErr(error));
  }

  return (
    <>
      <div className="wrap">
        <TextInput
          type="text"
          className={`textInput ${error ? "error" : ""}`}
          placeholder={"Enter your URL"}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        ></TextInput>
        <Button onClick={getUrl} className="btn2">
          Go!
        </Button>
      </div>
      {error ? <p className="err">{"This is not a valid Url!"}</p> : null}

      <p className="urlPara">Over 10,000 URLs shortened every month!</p>

      {urlModal ? (
        <div className="urlModalWrap">
          <div className="wrapModal">
            <div className="title">
              <h3>Here is your Url! </h3>
              <p className="closeBtn" onClick={checkUrlModal}>
                x
              </p>
            </div>
            <div className="dataWrap">
              <p className="data">
                {data}
                <div>
                  <CopyToClipboard text={data}>
                    <AiOutlineCopy className="copyIcon" size={20} />
                  </CopyToClipboard>
                </div>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default searchBar;

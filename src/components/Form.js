import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState(" ");
  const handleUpClick = () => {
    // console.log("UpClick" + text);
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlertTitle("Convert to Uppercase", "success");
  };
  const handleLoClick = () => {
    // let newText = text.toLowerCase();
    setText(text.toLowerCase());
    props.showAlertTitle("Convert to Lowerercase", "warning");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleOnCopy = () => {
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlertTitle("Copy Text", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlertTitle("Remove Extra Space", "success");
  };

  return (
    <>
      <div className="container my-5">
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textarea"
          rows="8"
          style={{
            backgroundColor: props.changeMode === "dark" ? "grey" : "white",
          }}
        ></textarea>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <br />

        <h2>Count Word and letters:</h2>
        <p>
          these are letters{text.length} and Words{text.split(" ").length}
        </p>
        <p>time read of words in minutes{0.08 * text.split(" ").length}</p>
      </div>
    </>
  );
}

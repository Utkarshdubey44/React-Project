import React, { useState, useEffect } from "react";

const calculateWordFrequency = (text) => {
  const words = text.split(/\s+/).filter(Boolean);
  const wordFrequency = words.reduce((acc, word) => {
    // Remove non-alphanumeric characters only if they appear at the end of the word
    word = word.replace(/[^a-zA-Z0-9]+$/, "");

    if (word.length > 4) {
      word = word.toLowerCase();
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});
  return wordFrequency;
};

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [wordCount, setWordCount] = useState({});
  const [showWordFrequency, setShowWordFrequency] = useState(false);
  // let typingTimeout = null;

  // useEffect(() => {
  //   if (text.length > 0) {
  //     clearTimeout(typingTimeout);
  //     typingTimeout = setTimeout(() => {
  //       analyzeText();
  //     }, 2000);
  //   }
  //   return () => clearTimeout(typingTimeout);
  // }, [text]);

  const handleUpClick = () => {
    // console.log("Uppercase was clicked!!")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to Upper Case!", "success");
  };

  const handleDownClick = () => {
    //   console.log("Lowercase was clicked!!");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text changed to Lower Case!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    if (newText.length !== 1) {
      setText(newText.join(" ").trim());
      props.showAlert("Extra Spaces removed from the Text!", "success");
    } else {
      props.showAlert("There are no spaces to remove!", "warning");
    }
  };

  const handleOnChange = (event) => {
    // console.log("Change was clicked!!")
    // its going to chage the text value to the data entered in text area
    setText(event.target.value);
  };

  const analyzeText = () => {
    const words = text.split(/\s+/).filter(Boolean);
    const wordFrequency = words.reduce((acc, word) => {
      // Remove any non-alphanumeric characters if they appear at the end
      word = word.replace(/[^a-zA-Z0-9]+$/, "");
      if (word.length > 4) {
        word = word.toLowerCase();
        acc[word] = (acc[word] || 0) + 1;
      }
      return acc;
    }, {});
    setWordCount(wordFrequency);
  };

  const handleFrequencyCount = () => {
    const wordFrequency = calculateWordFrequency(text);
    setWordCount(wordFrequency);
    setShowWordFrequency(true);
    props.showAlert(
      "Check Analysed Frequency in the bottom of the page!",
      "success"
    );
  };

  const handleDownloadClick = () => {
    const content = `${text}`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "textutils.txt";
    link.click();

    URL.revokeObjectURL(link.href);
    props.showAlert("File downloading!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "primary"
              ? "#ff8394"
              : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          style={{
            backgroundColor:
              props.mode === "dark"
                ? "grey"
                : props.mode === "primary"
                ? "rgb(255 255 255 / 13%)"
                : "white",
            color:
              props.mode === "dark"
                ? "white"
                : props.mode === "primary"
                ? "yellow"
                : "black",
          }}
          onChange={handleOnChange}
          value={text}
          rows="8"
        ></textarea>

        <button onClick={handleUpClick} className="btn btn-primary m-1">
          Convert to Upper Case
        </button>
        <button onClick={handleDownClick} className="btn btn-primary m-1">
          Convert to Lower Case
        </button>
        <button onClick={handleClearClick} className="btn btn-primary m-1">
          Clear Text
        </button>
        <button onClick={handleCopy} className="btn btn-primary m-1">
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary m-1">
          Remove Extra Spaces
        </button>
        <button onClick={handleFrequencyCount} className="btn btn-primary m-1">
          Word Frequency
        </button>
        <button onClick={handleDownloadClick} className="btn btn-primary m-1">
          Download Text
        </button>

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.length === 0 ? 0 : text.split(/[ ]+/).length} words and{" "}
            {text.length} characters
          </p>
          <p>
            {0.008 * text.split(" ").length > 0.008
              ? 0.008 * text.split(" ").length + " Minutes to read!"
              : ""}
          </p>
          <h3>Preview</h3>
          <p id="box">
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here!!!"}
          </p>

          {showWordFrequency && (
            <>
              <h3>Word Frequency</h3>
              <div>
                {Object.entries(wordCount).map(([word, count]) => (
                  <div key={word}>{`${word}: ${count}`}</div>
                ))}
              </div>
            </>
          )}
        </div>
        {/* <div className="ratio ratio-16x9">
            <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowfullscreen
            ></iframe>
        </div> */}
      </div>
    </>
  );
}

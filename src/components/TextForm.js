import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked!!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper Case!", "success");
    }

    const handleDownClick = () => {
    //   console.log("Lowercase was clicked!!");
      let newText = text.toLocaleLowerCase();
      setText(newText);
    props.showAlert("Text changed to Lower Case!", "success");

    }

    const handleClearClick = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared!", "success");

    }

    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard!", "success");
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        if (newText.length !== 1){
            setText(newText.join(" "))
            props.showAlert("Extra Spaces removed from the Text!", "success");
        }else{
            props.showAlert("There are no spaces to remove!", "warning");
        }
    }

    const handleOnChange = (event)=> {
        // console.log("Change was clicked!!")
        // its going to chage the text value to the data entered in text area
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here');
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
          Convert to Uppercase
        </button>
        <button onClick={handleDownClick} className="btn btn-primary m-1">
          Convert to LowerCase
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
              : "Enter something in the textbox above to preview it here"}
          </p>
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

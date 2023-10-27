import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked!!")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
    //   console.log("Lowercase was clicked!!");
      let newText = text.toLocaleLowerCase();
      setText(newText);
    }

    const handleClearClick = () => {
      let newText = '';
      setText(newText);
    }

    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=> {
        console.log("Change was clicked!!")
        // its going to chage the text value to the data entered in text area
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="8"
          ></textarea>
        </div>

        <button onClick={handleUpClick} className="btn btn-primary m-1">
          Convert to Uppercase
        </button>
        <button onClick={handleDownClick} className="btn btn-primary mx-1">
          Convert to LowerCase
        </button>
        <button onClick={handleClearClick} className="btn btn-primary">
          Clear Text
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-1">
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary">
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read!</p>
        {/* if {text.length == 1 && text.split(" ").length == text.length} */}
        <h3>Preview</h3>
        <p id="box">{text}</p>
      </div>
      <div className="ratio ratio-21x9">
        <iframe
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

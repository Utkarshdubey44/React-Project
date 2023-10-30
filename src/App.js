import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  // It's for showing alert
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1650);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled!","success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils";
    }
  }
  const toggleModeB = ()=>{
    if(mode === 'light'){
      setMode('primary');
      document.body.style.backgroundColor = "#0e324b";
      showAlert("Blue mode has been enabled!","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeB={toggleModeB}
        />
        {/* <div className="row">
        <div className="col-2">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div> */}
        <div className="d-flex">
          <div className="p-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="p-2 flex-grow-1 m-3">
            <Alert alert={alert} />
          </div>
        </div>
        <div className="container my-3">
          <Switch>
          {/* As react to partial matching so for this we use exact to match same keyword of routes */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                mode={mode}
                showAlert={showAlert}
                heading="Enter the text to analyse"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

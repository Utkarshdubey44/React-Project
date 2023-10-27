import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }

  }
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="row">
        <div className="col-2">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyse"/>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="row">
        <div className="col-2">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;

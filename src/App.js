import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success")
    document.title = "TextUtils - Dark mode"
  }
  else{
    setMode("light") ;
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success")
    document.title = "TextUtils - Light mode"
  }
}
  return (
    <>
  {/* <Router>  */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch> */}
         {/* <Route exact path="/about">
            <About />
          </Route> */}
         {/* <Route exact path='/'> */}
            <TextForm showAlert={showAlert} heading="Enter the text to annalyze" mode={mode}/>
          {/* </Route> */}
{/* </Switch> */}
</div>
{/* </Router>  */}
    </>
  );
}

export default App;


import './App.css'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [modeName, setmodeName] = useState("Enable dark mode");

  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1000);
  }
  const toogleMode =()=>{
    if(mode === "dark"){
      setMode("light");
      showAlert("dark mmode disable","sucess");
      setmodeName("Enable dark mode");
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-Light mode';
    }
    else{
      setMode("dark");;
      showAlert("dark mmode enabled","sucess")
      setmodeName("Disable  dark mode");
      document.body.style.backgroundColor = '#29095c';
      document.title = 'TextUtils-Dark mode';
    }
  }
  const redMode =()=>{
    setMode("red");
    document.body.style.backgroundColor = "#cb1627";
  }
  return (
     <> 
     <Router>
      <Navbar title={"texts"} mode={mode} redMode={redMode} modeName={modeName} toogleMode={toogleMode} about="about us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
               <About />
          </Route>
          <Route exact path="/">
               <TextForm showAlert={showAlert} heading="text here something.." mode={mode}></TextForm>
          </Route>
      </Switch>
      </div> 
      </Router>
     </>
  );
}

export default App;

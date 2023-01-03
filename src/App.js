import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextArea from './Components/TextArea';
import About from "./Components/About";

function App() {

  const onClick = ()=>{                              // function for dark mode
      setMode("dark");
      document.body.style.backgroundColor = "rgb(44, 54, 57)";
      document.body.style.color = "white";
      changeAlert("dark" , "Dark mood has been enabled");
  }

  const onClick2 = ()=>{                              // function for dark mode
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    changeAlert("light" , "light mood has been enabled");
  }

  const onClick3 = ()=>{                              // function for primary mode
    setMode("primary");
    document.body.style.backgroundColor = "#5cbfc6";
    document.body.style.color = "black";
    changeAlert("primary" , "primary mood has been enabled");
  }

  const onClick4 = ()=>{                              // function for danger mode
    setMode("danger");
    document.body.style.backgroundColor = "#EE7674";
    document.body.style.color = "black";
    changeAlert("danger" , "danger mood has been enabled");
  }



  const [mode , setMode] = useState("light");     // useState for dark mode


  const changeAlert = (type , message)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const [alert , setAlert] = useState(null);     // useState for set alert



  return (
    <>

    <Router>

     <Navbar mode={mode} toggleMode={onClick} toggleMode2={onClick2} toggleMode3={onClick3} toggleMode4={onClick4}/>
     <Alert alert={alert}/>
     
     <Routes>
         <Route exact path="/about" element={<About mode={mode} />} /> 
         <Route exact path="/" element={<TextArea mode={mode} changeAlert={changeAlert}  heading="Enter the Text"/>} /> 
      </Routes>
      
      </Router>
     
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
   const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#042743";
      showalert("dark mode has been enable","succes");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white";
      showalert("light mode has been enable","succes");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container mx-3'>
      <Routes>
          <Route path="/about"element={<About  mode={mode} />}/>
               
          <Route path="/" element={ <Text showalert={showalert} mode={mode}/>}/>
        </Routes>
    </div>
    </Router>
   
    </>
      
  );
}

export default App;

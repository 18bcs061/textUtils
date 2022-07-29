import React,{useState} from 'react'
import "./App.css";
import Navbar from "./components/navbar";
import Text from "./components/text";
import About from "./components/About";
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
   const togglemode=()=>{
        if(Mode==='dark'){
          setMode('light');
          setmodeline('Enable Dark Mode')
          document.body.style.background='white'
        }
        else{
          setMode('dark');
          setmodeline('Disable Dark Mode')
          document.body.style.background='#14305a'
        }
   }

   const [Mode, setMode] = useState('light');
   const [modeline,setmodeline]=useState('Enable dark mode')
  return (
    <>
    <Navbar title='textUtils' about='about' mode={Mode} togglemode={togglemode} m={modeline}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Text heading='This Will Change your text in UpperCase' mode={Mode}/>
          </Route>
      </Switch>
    </div>
    
    </>
  );
}

export default App;

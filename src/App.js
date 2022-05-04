import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";





function App() {






  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
}

 
  const[mode,setmode]=useState("light");




  const toggleMode = () => {
    if (mode === 'light') {
        setmode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success")
        document.title = "TextUtils - Dark Mode";
        setInterval(() => {
          document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1000);
        
    }
    else {
        setmode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success")
        document.title = "TextUtils - Light Mode";
        setInterval(() => {
          document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1000);
    }
  };

  
  


  return (
      
    
      
      <>
      

      <Navbar title="Textutils" about="About" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert}/>
      <Textform  showAlert={showAlert} heading="Try TextUtils - Word Counter,character Counter,Remove extra Spaces" mode={mode}/>

      <About  mode={mode} />





          
      
      
         
      </>
  );
};
export default App;


import './App.css';
import Nav from './Navbar/Nav';
// import About from './Navbar/About';
import TextForm from './Navbar/TextForm';
import { useState } from 'react';
import Alert from './Navbar/Alert';
// import {
//   Switch,
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const change1 = () => {
    if (mode === 'light') {
      setMode('#042743');
      document.body.style.backgroundColor = '#042743';
      showAlert('You have been Enable Dark Mode', 'Suceess');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';

      // }, 2000);


      //  setInterval(() => {
      //   document.title = 'Install TextUtils Now';

      //   }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('You have been Enable Light Mode', 'Success');
      document.title = 'TextUtils - Light Mode';


    }
  }
  return (
    <>
    {/* <Router> */}
      <Nav title="Word Cal" home="Home" about="About" mode={mode} change={change1} />
      <Alert alert={alert} />


        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
             <div className="container my-3">
          <TextForm heading="Preview" mode={mode} showAlert={showAlert} />
          </div>

          {/* </Route> */}
        {/* </Switch> */}


{/* </Router> */}







    </>
      );
}

      export default App;

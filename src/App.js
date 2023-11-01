import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';



function App() {
  let myStyle1 = {
    float: 'right'
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [myStyle, setMyStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
  });
  const toggleDarkMode = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has Been Enabled", "success");
      // setInterval(() => {
      //   document.title = 'Install Text Utilities'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Virus Alert'
      // }, 1500);
      //Above Logic is for Dynamic Title Change
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has Been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <div style={myStyle}>
          <Navbar title='Text-Utilities' mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}
            searchMode={`${myStyle.backgroundColor === 'white' ? 'white' : 'black'}`}
            textMode={`${myStyle.backgroundColor === 'white' ? 'black' : 'white'}`}
            classMode={`${myStyle.backgroundColor === 'white' ? 'mySearch1' : 'mySearch2'}`}
            btnMode={`${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}
          />
          <Alert alert={alert} />
          <div className="form-check form-switch my-3">
            <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode} style={myStyle1} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyle1}>Enable Dark Mode</label>
          </div>
          <div className="container my-3" >
            <Routes>
            <Route path="/" element={<Text heading='Enter Sample Text For Utilities Below:' mode={`${myStyle.backgroundColor === 'white' ? 'white' : 'black'}`}
                  textMode={`${myStyle.backgroundColor === 'white' ? 'black' : 'white'}`}
                  classMode={`${myStyle.backgroundColor === 'white' ? 'myBox1' : 'myBox2'}`}
                  btnMode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}
                  showAlert={showAlert}
                />}>
              </Route>
              <Route path="/about" element={<About mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}/>}>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from './Components/Home';
import Alert from './Components/Alert';
import { useState } from 'react';
import Createtask from './Components/Createtask';
import StudentHome from './Components/StudentHome';
// import Createtask from './Components/Createtask';

function App() {
  {document.body.style.backgroundcolor="#b7acac"};
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   showAlert(null)
    // }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
      <Route path="/createtask" element={<Createtask showAlert={showAlert}/>}></Route>
      <Route path="/student" element={<StudentHome showAlert={showAlert}/>}></Route>
      <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
      <Route path="/login" element={<Login showAlert={showAlert}/>}></Route>
      <Route path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

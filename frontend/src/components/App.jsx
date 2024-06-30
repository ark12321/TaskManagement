import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Grouplogin from './Grouplogin';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Signup/>} />
          <Route path="/register" element ={<Signup/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/grouplogin" element={<Grouplogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

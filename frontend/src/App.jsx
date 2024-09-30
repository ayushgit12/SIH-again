import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaptchaTest from './components/captcha.jsx'
import SignUp from './components/signup.jsx'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import DemoPage from './components/DemoPage.jsx'
function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/captcha" element={<CaptchaTest />} />
    <Route path="/signup"  element ={<SignUp/>} />
      <Route path="/demopage"  element ={<DemoPage/>} />
  </Routes>
</Router>


  
  );
}

export default App

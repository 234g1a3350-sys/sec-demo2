import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import naive from './componets/navie.jsx'
import Head ,{Foot} from './componets/base.jsx'

  
function App() {
  const [name,setname] = useState(0)

  return (
    <>
    <div>
    <BrowserRouter>
    <nav>
      <Link to = '/Home'>Home</Link>
      <Link to = '/About'>About</Link>
      <Link to = '/Contact'>Contact</Link>
    </nav>
    
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
     </div>

      <div>
      <Head/>
      <Foot/> 
        </div>
    </>
    
  )
}

export default App

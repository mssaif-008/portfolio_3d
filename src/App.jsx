import { BrowserRouter, HashRouter } from "react-router-dom"
import {About, Contact,
  Hero, Navbar, Tech, Works , 
} from "./components"
import './App.css'
import './index.css';

const  App= ()=> {
  

  return (
    

    <HashRouter>
    <div className="core">
      <div className="core-in">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      
      <div className="relative z-0">
        <Contact />
        
      </div>
    </div>
    </HashRouter>
  )
}

export default App;

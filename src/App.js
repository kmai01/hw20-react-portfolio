import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
      
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

      </div>

    </Router>
  
  
      
       
    
  );
}

export default App;

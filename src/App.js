import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home'


import Medya from './components/medya/Medya'
import Online from './components/online/Online'
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import About from "./components/About/About";
import Career from "./components/career/Career";

export default function App() {
  return (
    <Router>
      <div>
     
        <Switch>
          
          
          <Route path="/" exact component={Home}/>
          <Route path="/Hizmetler" component={Services}/>
          <Route path="/Hakkımızda" component={About}/>
          <Route path="/Kariyer" component={Career}/>
          <Route path="/Medya" component={Medya}/>
         
          <Route path="/Online" component={Online}/>
          <Route path="/Contact" component={Contact}/>
           
         
        </Switch>
      </div>
    </Router>
  );
}




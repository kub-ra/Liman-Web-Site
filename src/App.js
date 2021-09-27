import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home'
import Hizmetler from './components/hizmetler/Services'
import Kariyer from './components/kariyer/Kariyer'
import Medya from './components/medya/Medya'

import Online from './components/online/Online'
import Hakkımızda from './components/hakkımızda/About'
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <Router>
      <div>
     
        <Switch>
          
          
          <Route path="/" exact component={Home}/>
          <Route path="/Hizmetler" component={Hizmetler}/>
          <Route path="/Hakkımızda" component={Hakkımızda}/>
          <Route path="/Kariyer" component={Kariyer}/>
          <Route path="/Medya" component={Medya}/>
         
          <Route path="/Online" component={Online}/>
          <Route path="/Contact" component={Contact}/>
           
         
        </Switch>
      </div>
    </Router>
  );
}




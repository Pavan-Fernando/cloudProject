import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Home from './Home';
import About from './about';
import Signin from './signin';


function App() {

  const [isOpen, setIsOpen] = useState(false);

      const toggle = () => {
            setIsOpen(!isOpen);
      };

  return (
      <Router> 
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <About />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
        </Switch>
    </Router> 

    
  );
}

export default App;

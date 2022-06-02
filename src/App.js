import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Home from './Home';
import About from './about';
import Signin from './signin';
import Contact from './contact';
import Youtube from './youtube';



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
              <Contact />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
        </Switch>
        {/* <Youtube videoId='Hg5zM6-UbgU' /> */}
    </Router> 

    
  );
}

export default App;

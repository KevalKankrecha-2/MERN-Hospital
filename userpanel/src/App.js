// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import ContactUs from './contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Route for Home page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Route for Contact Us page */}
        <Route path="/contact">
          <ContactUs />
        </Route>
      </div>
    </Router>
  );
}

export default App;

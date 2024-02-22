import React from 'react';
import fib_picture from './fib-picture.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={fib_picture} className="App-logo" alt="fibonnaci-picture" />
          <a
            className="App-link"
            href="https://www.mathsisfun.com/numbers/fibonacci-sequence.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fibonnaci Calculator
          </a>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;

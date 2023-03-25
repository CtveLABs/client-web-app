import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import LandingPage from "./scenes/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./scenes/Blog/Blog";
import ScholarshipsList from "./scenes/Scholarship/ScholarshipsList/ScholarshipsList";
import Team from "./components/Team/Team";
import Practice from './scenes/Practice/Practice';


function App() {
  return (
      <Router>
        <div className="App">
            <Route path="/practice" component={Practice} />
        </div>
      </Router>
  );
}

export default App;

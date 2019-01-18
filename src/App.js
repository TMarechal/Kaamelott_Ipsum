import React, { Component } from 'react';
import './App.css';
import './index.css';

import Header from "./components/Header"
import Quote from "./components/Quote"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return(
      <div className="dFlex justifySB alignIC flexDC bg">
        <Header />
        
        <Quote />

        <Footer />
      </div>

    )
  }
}

export default App;

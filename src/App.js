// All your imports should be at the top
// import * as ReactDOM from 'react-dom';
import React from "react"

// components
import Header from './components/Header';

//css
import './App.css';
import Sidebar from "./components/Sidebar";
import Rating from "./components/Rating"
import Analysis from "./components/Analysis"
import Reviews from "./components/Reviews"
import Visitors from "./components/Visitors"

// const ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Commence Dashboard Creation!</h1>,
//   document.querySelector('main')
// );


function App() {
  return (
    <div className='App'>
      <Header />
      <div className="container">
        <Sidebar />
        <Reviews />
        <Rating />
        <Analysis />
        <Visitors />
      </div>
    </div>
  );
}

export default App;

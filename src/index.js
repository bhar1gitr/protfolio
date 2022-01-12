import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import "./styles/index.css"
import "./styles/Home.css"

ReactDOM.render(
  
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Footer></Footer>
    </>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

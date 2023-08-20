// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<News key="general" category="general"></News>}></Route>
          <Route path="/science" element={<News key="science" category="science"></News>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment"></News>}></Route>
          <Route path="/sports" element={<News key="sports" category="sports"></News>}></Route>
          <Route path="/business" element={<News key="business" category="business"></News>}></Route>
          <Route path="/health" element={<News key="health" category="health"></News>}></Route>
          <Route path="/technology" element={<News key="technology" category="technology"></News>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

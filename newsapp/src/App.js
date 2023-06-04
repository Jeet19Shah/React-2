import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route exact path='/General'       element={<News key="General"        pageSize={6} country='in' catagory="General" />} />
            <Route exact path='/Business'      element={<News key="Business"       pageSize={6} country='in' catagory="Business" />} />
            <Route exact path='/Entertainment' element={<News key="Entertainment"  pageSize={6} country='in' catagory="Entertainment" />} />
            <Route exact path='/Health'        element={<News key="Health"         pageSize={6} country='in' catagory="Health" />} />
            <Route exact path='/Science'       element={<News key="Science"        pageSize={6} country='in' catagory="Science" />} />
            <Route exact path='/Sports'        element={<News key="Sports"         pageSize={6} country='in' catagory="Sports" />} />
            <Route exact path='/Technology'    element={<News key="Technology"     pageSize={6} country='in' catagory="Technology" />} />
          </Routes>
          </>
        </BrowserRouter>

        
      </div>
    );
  }
}

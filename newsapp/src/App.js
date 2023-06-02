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
        <Navbar />
        <News pageSize={6} country={"in"} catagory="SCIENCE" />
          <Routes>
            <Route key="General" exact path='/General' element={<News pageSize={6} country='in' catagory="General" />} />
            <Route key="Business" exact path='/Business' element={<News pageSize={6} country='in' catagory="Business" />} />
            <Route key="Entertainment" exact path='/Entertainment' element={<News pageSize={6} country='in' catagory="Entertainment" />} />
            <Route key="Health" exact path='/Health' element={<News pageSize={6} country='in' catagory="Health" />} />
            <Route key="Science" exact path='/Science' element={<News pageSize={6} country='in' catagory="Science" />} />
            <Route key="Sports" exact path='/Sports' element={<News pageSize={6} country='in' catagory="Sports" />} />
            <Route key="Technology" exact path='/Technology' element={<News pageSize={6} country='in' catagory="Technology" />} />
          </Routes>
        </BrowserRouter>

        
      </div>
    );
  }
}

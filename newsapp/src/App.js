import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress : 0
  }
  setProgress(progress){
    this.setState({progress : progress});
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path='/'              element={<News  setProgress = {this.setProgress} key="General"        pageSize={6} country='in' catagory="General" />} />
            <Route exact path='/General'       element={<News  setProgress = {this.setProgress} key="General"        pageSize={6} country='in' catagory="General" />} />
            <Route exact path='/Business'      element={<News  setProgress = {this.setProgress} key="Business"       pageSize={6} country='in' catagory="Business" />} />
            <Route exact path='/Entertainment' element={<News  setProgress = {this.setProgress} key="Entertainment"  pageSize={6} country='in' catagory="Entertainment" />} />
            <Route exact path='/Health'        element={<News  setProgress = {this.setProgress} key="Health"         pageSize={6} country='in' catagory="Health" />} />
            <Route exact path='/Science'       element={<News  setProgress = {this.setProgress} key="Science"        pageSize={6} country='in' catagory="Science" />} />
            <Route exact path='/Sports'        element={<News  setProgress = {this.setProgress} key="Sports"         pageSize={6} country='in' catagory="Sports" />} />
            <Route exact path='/Technology'    element={<News  setProgress = {this.setProgress} key="Technology"     pageSize={6} country='in' catagory="Technology" />} />
          </Routes>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

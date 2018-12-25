import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Nav from './components/nav';
import Home from './pages/home';
import Category from './pages/category';
import SubCategory from './pages/sub-category';
import { UserContext } from './components/nav/user-context';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      setUserData: this.setUserData
    }
  }

  formatUserData = (data) => {
    const { name, email } = data;
    const picture = data.picture &&
      data.picture.data &&
      data.picture.data.url 
        ? data.picture.data.url 
        : '';
    
    return  { name, email, picture }
  }

  setUserData = async (userData) => {
    const _this = this;
    const response = await fetch('/user', {
      method: 'POST',
      body: JSON.stringify(_this.formatUserData(userData)),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const user = await response.json();

    this.setState({ user })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <UserContext.Provider value={this.state}>
              <Nav setUserData={this.setUserData} />
              <Route path="/" exact component={Home} />
              <Route path="/category/:id" exact component={Category} />
              <Route path="/sub-category/:id" exact component={SubCategory} />
            </UserContext.Provider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

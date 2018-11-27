import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StaffList3 from './StaffList3';

class App extends Component {
	render() {
	    return (
	      <Router>
	        <Switch>
	          <Route path='/' exact={true} component={Home}/>
	          <Route path='/staffs' exact={true} component={StaffList3}/>
	        </Switch>
	      </Router>
	    )
	  }
}

export default App;

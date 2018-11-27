import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StaffList2 from './StaffList2';
import StaffEdit2 from './StaffEdit2';
import StaffSearch2 from './StaffSearch2';

class App extends Component {
	render() {
	    return (
	      <Router>
	        <Switch>
	          <Route path='/' exact={true} component={Home}/>
	          <Route path='/staffs' exact={true} component={StaffList2}/>
	          <Route path='/staffs/search' exact={true} component={StaffSearch2}/>
	          <Route path='/staffs/:id' exact={true} component={StaffEdit2}/>		
	        </Switch>
	      </Router>
	    )
	  }
}

export default App;

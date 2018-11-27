import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

interface Staff {
	id: number;
	name: string;
    department: string;
    position: string;
    permission: string;
    gender: string;
    technicalTitle: string;
    degree: string;
    graduatedFrom: string;
    major: string;
    yearOfGraduation: string;
    enrolledSince: string;
    phoneNo: string;
    hometown: string;
    yearOfBirth: string;
    remark: string;
}
interface StaffSearch2Props {
    getStaff: func;
}
interface StaffSearch2State {
    staff: Array<Staff>;
}

class StaffSearch2 extends React.Component<StaffSearch2Props, StaffSearch2State> {
	  constructor(props: StaffSearch2Props) {
		    super(props);
		    this.state = {staff: []};
		  }
	
	  getStaff(staffInput){
		  this.setState({staff: staffInput});
	  }
	  
	  
	render() {
	    return (
	      <Router>
	        <Switch>
	          <Route path='/staffs/search' 
	        	  exact={true} 
	              component={SearchInput}
	              getStaffInput = {this.getStaff.bind(this)}
	          />
	          <Route path='/staffs/search/result' 
	        	  exact={true} 
	              component={SearchResult}
	              searchInput = {this.state.staff}
	          />		
	        </Switch>
	      </Router>
	    )
	  }
}

export default withRouter(StaffSearch2);

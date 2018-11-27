import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

interface Staff {
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
interface StaffSearch3Props {
}
interface StaffSearch3State {
    staff: Array<Staff>;
}

class StaffSearch3 extends React.Component<StaffSearch3Props, StaffSearch3State> {
	  constructor(props: StaffSearch3Props) {
		    super(props);
		    this.state = {
		    		staff: {
		    	    name: '',
		    	    department: '',
		    	    position: '',
		    	    permission: '',
		    	    gender: '',
		    	    technicalTitle: '',
		    	    degree: '',
		    	    graduatedFrom: '',
		    	    major: '',
		    	    yearOfGraduation: '',
		    	    enrolledSince: '',
		    	    phoneNo: '',
		    	    hometown: '',
		    	    yearOfBirth: '',
		    	    remark: ''
		    	  }
		    };
		    this.getStaffInput=this.getStaffInput.bind(this);
		  }
	
	  getStaffInput(staffInput){
		  this.setState({staff: staffInput});
	  }
	  
	render() {
	    return (
	      <div>
	        <SearchInput onSubmit = {(event)=>{this.getStaffInput.bind(this);}}/>
	        <SearchResult searchInput = {this.state.staff}/>
	      </div>
	    );
	  }
}

export default withRouter(StaffSearch3);

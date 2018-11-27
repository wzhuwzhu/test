import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import EditModal from './EditModal';

class GetStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
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
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const staffAO = await (await fetch(`/api/staff/${this.props.match.params.id}`)).json();
      this.setState({staff: staffAO});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const {nameValid, yearOfGraduationValid, enrolledSinceValid, phoneNoValid, yearOfBirthValid, formValid} = this.state;
    let staff = {...this.state.staff};
    staff[name] = value;
    this.setState({staff});
  }

  render() {
    const {staff} = this.state;
         
    return 
    (<div> 
       <EditModal showModal={this.state.showModal} staff={this.state.staff}/>
     </div>
     <div>
       <StaffEdit3 staff={this.state.staff} handleChange={this.handleChange}/>
     </div>
    )

export default GetStaff;
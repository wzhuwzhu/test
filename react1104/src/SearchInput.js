import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

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
interface SearchInputProps {
	onSubmit: func;
}
interface SearchInputState {
    staffInput: Array<Staff>;
}

class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      staffInput: {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let staffInput = {...this.state.staffInput};
    staffInput[name] = value;
    this.setState({staffInput});
  }
  
  handleSubmit(staffInput){this.props.onSubmit(staffInput)}

  render() {
    const {staffInput} = this.state;
    const title = <h2>Advanced Staff Search</h2>;
         
    return <div>
    <AppNavbar/>
    <Container>
      {title}
      <Form>
        <div className="row">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={staffInput.name || ''}
                 onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="department">Department</Label>
            <Input type="text" name="department" id="department" value={staffInput.department || ''}
                 onChange={this.handleChange} autoComplete="Chemistry"/>
          </FormGroup>
          <FormGroup>
            <Label for="position">Position</Label>
            <Input type="text" name="position" id="position" value={staffInput.position || ''}
                 onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <label > <input type="radio" name='gender' value="male" onChange={this.handleChange}/>M</label>
        	  <label > <input type="radio" name='gender' value="female" onChange={this.handleChange}/>F</label><br/>
        	  <label > <input type="radio" name='gender' value="" onChange={this.handleChange}/>Disabled</label>
        	  <div>Gender: {staffInput.gender || ''}</div>
        	</FormGroup>  
          <FormGroup className="col-md-4 mb-3">
            <Label for="permission">Permission</Label>
            <Input type="text" name="permission" id="permission" value={staffInput.permission || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>  
          <FormGroup className="col-md-4 mb-3">
            <Label for="technicalTitle">TechnicalTitle</Label>
            <Input type="text" name="technicalTitle" id="technicalTitle" value={staffInput.technicalTitle || ''}
                   onChange={this.handleChange} autoComplete="none"/>
          </FormGroup>  
          <FormGroup className="col-md-4 mb-3">
            <Label for="degree">Degree</Label>
            <Input type="text" name="degree" id="degree" value={staffInput.degree || ''}
                   onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="graduatedFrom">GraduatedFrom</Label>
            <Input type="text" name="graduatedFrom" id="graduatedFrom" value={staffInput.graduatedFrom || ''}
                   onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
            <FormGroup className="col-md-4 mb-3">
            <Label for="major">Major</Label>
            <Input type="text" name="major" id="major" value={staffInput.major || ''}
                   onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="yearOfGraduation">YearOfGraduation (yyyy)</Label>
            <Input type="text" name="yearOfGraduation" id="yearOfGraduation" value={staffInput.yearOfGraduation || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="enrolledSince">EnrolledSince (yyyymmdd)</Label>
            <Input type="text" name="enrolledSince" id="enrolledSince" value={staffInput.enrolledSince || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="phoneNo">PhoneNo</Label>
            <Input type="text" name="phoneNo" id="phoneNo" value={staffInput.phoneNo || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="hometown">Hometown</Label>
            <Input type="text" name="hometown" id="hometown" value={staffInput.hometown || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="yearOfBirth">YearOfBirth (yyyy)</Label>
            <Input type="yearOfBirth" name="yearOfBirth" id="yearOfBirth" value={staffInput.yearOfBirth || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
          <FormGroup className="col-md-4 mb-3">
            <Label for="remark">Remark</Label>
            <Input type="text" name="remark" id="remark" value={staffInput.remark || ''}
                   onChange={this.handleChange} autoComplete=""/>
          </FormGroup>
        </div>
        <FormGroup>
          <Button color="primary" onClick = {this.handleSubmit(staffInput)}>
            Search
          </Button>
          <Button color="secondary" tag={Link} to="/staffs">Cancel</Button>
        </FormGroup>
      </Form>
    </Container>
  </div>
  }
 }

export default SearchInput;
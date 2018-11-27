import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import EditModal from './EditModal';

class StaffEdit2 extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  async handleSubmit(event) {
	    event.preventDefault();
	    const {staff} = this.state;

	    await fetch((staff.id)?'/api/staff/'+(staff.id):'/api/staff', {
	      method: (staff.id) ? 'PUT' : 'POST',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(staff),
	    });
	    this.props.history.push('/staffs');
	  }

  async handleOpenModal () {
	    this.setState({ showModal: true });
	  }
  
  async handleCloseModal () {
	    this.setState({ showModal: false });
	  }
  
  render() {
    const {staff} = this.state;
    const title = <h2>{staff.id ? 'Edit Staff' : 'Add Staff'}</h2>;
         
    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={staff.name || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="department">Department</Label>
            <Input type="text" name="department" id="department" value={staff.department || ''}
                   onChange={this.handleChange} autoComplete="Chemistry"/>
          </FormGroup>
          <FormGroup>
            <Label for="position">Position</Label>
            <Input type="text" name="position" id="position" value={staff.position || ''}
                   onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <label > <input type="radio" name='gender' value="male" onChange={this.handleChange}/>M</label><br/>
          	  <label > <input type="radio" name='gender' value="female" onChange={this.handleChange}/>F</label>
          	  <div>Gender: {staff.gender || ''}</div>
          	</FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="permission">Permission</Label>
              <Input type="text" name="permission" id="permission" value={staff.permission || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="technicalTitle">TechnicalTitle</Label>
              <Input type="text" name="technicalTitle" id="technicalTitle" value={staff.technicalTitle || ''}
                     onChange={this.handleChange} autoComplete="none"/>
            </FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="degree">Degree</Label>
              <Input type="text" name="degree" id="degree" value={staff.degree || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="graduatedFrom">GraduatedFrom</Label>
              <Input type="text" name="graduatedFrom" id="graduatedFrom" value={staff.graduatedFrom || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
              <FormGroup className="col-md-4 mb-3">
              <Label for="major">Major</Label>
              <Input type="text" name="major" id="major" value={staff.major || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="yearOfGraduation">YearOfGraduation (yyyy)</Label>
              <Input type="text" name="yearOfGraduation" id="yearOfGraduation" value={staff.yearOfGraduation || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="enrolledSince">EnrolledSince (yyyymmdd)</Label>
              <Input type="text" name="enrolledSince" id="enrolledSince" value={staff.enrolledSince || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="phoneNo">PhoneNo</Label>
              <Input type="text" name="phoneNo" id="phoneNo" value={staff.phoneNo || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="hometown">Hometown</Label>
              <Input type="text" name="hometown" id="hometown" value={staff.hometown || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="yearOfBirth">YearOfBirth (yyyy)</Label>
              <Input type="yearOfBirth" name="yearOfBirth" id="yearOfBirth" value={staff.yearOfBirth || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="remark">Remark</Label>
              <Input type="text" name="remark" id="remark" value={staff.remark || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
          </div>
          <FormGroup>
            <Button onClick={this.handleOpenModal} color="primary">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/staffs">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
      <div>
      <EditModal isOpen={this.state.showModal} staff={this.state.staff}>
          <Button 
            onClick={(event) => {this.handleCloseModal(); this.handleSubmit(event)}}
            disabled={!this.state.formValid}
          >
            Confirm
          </Button>
          <Button onClick={this.handleCloseModal}>Cancel</Button>
      </EditModal>
    </div>
    </div>
  }
}

export default withRouter(StaffEdit2);
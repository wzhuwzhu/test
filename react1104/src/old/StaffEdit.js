import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class StaffEdit extends Component {

  emptyItem = {
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
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const staffAO = await (await fetch(`/api/staff/${this.props.match.params.id}`)).json();
      this.setState({item: staffAO});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch((item.id)?'/api/staff/'+(item.id):'/api/staff', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/staffs');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Staff' : 'Add Staff'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="department">Department</Label>
            <Input type="text" name="department" id="department" value={item.department || ''}
                   onChange={this.handleChange} autoComplete="Chemistry"/>
          </FormGroup>
          <FormGroup>
            <Label for="position">Position</Label>
            <Input type="text" name="position" id="position" value={item.position || ''}
                   onChange={this.handleChange} autoComplete="unknown"/>
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <label > <input type="radio" name='gender' value="male" onChange={this.handleChange}/>M</label><br/>
          	  <label > <input type="radio" name='gender' value="female" onChange={this.handleChange}/>F</label>
          	  <div>Gender: {item.gender || ''}</div>
          	</FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="permission">Permission</Label>
              <Input type="text" name="permission" id="permission" value={item.permission || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="technicalTitle">TechnicalTitle</Label>
              <Input type="text" name="technicalTitle" id="technicalTitle" value={item.technicalTitle || ''}
                     onChange={this.handleChange} autoComplete="none"/>
            </FormGroup>  
            <FormGroup className="col-md-4 mb-3">
              <Label for="degree">Degree</Label>
              <Input type="text" name="degree" id="degree" value={item.degree || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="graduatedFrom">GraduatedFrom</Label>
              <Input type="text" name="graduatedFrom" id="graduatedFrom" value={item.graduatedFrom || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
              <FormGroup className="col-md-4 mb-3">
              <Label for="major">Major</Label>
              <Input type="text" name="major" id="major" value={item.major || ''}
                     onChange={this.handleChange} autoComplete="unknown"/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="yearOfGraduation">YearOfGraduation (yyyy)</Label>
              <Input type="text" name="yearOfGraduation" id="yearOfGraduation" value={item.yearOfGraduation || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="enrolledSince">EnrolledSince (yyyymmdd)</Label>
              <Input type="text" name="enrolledSince" id="enrolledSince" value={item.enrolledSince || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="phoneNo">PhoneNo</Label>
              <Input type="text" name="phoneNo" id="phoneNo" value={item.phoneNo || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="hometown">Hometown</Label>
              <Input type="text" name="hometown" id="hometown" value={item.hometown || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="yearOfBirth">YearOfBirth (yyyy)</Label>
              <Input type="yearOfBirth" name="yearOfBirth" id="yearOfBirth" value={item.yearOfBirth || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
            <FormGroup className="col-md-4 mb-3">
              <Label for="remark">Remark</Label>
              <Input type="text" name="remark" id="remark" value={item.remark || ''}
                     onChange={this.handleChange} autoComplete=""/>
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/staffs">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(StaffEdit);
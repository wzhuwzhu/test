import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Form, FormGroup, Input, Label, ButtonGroup, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class StaffSearch2 extends Component {
	  constructor(props) {
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
		    	  }, 
		    	  selectedId: null, selectedName: null, staffs: [], showModal: false
		    };
		    this.handleChange = this.handleChange.bind(this);
		    this.remove = this.remove.bind(this);
		    this.handleOpenModal = this.handleOpenModal.bind(this);
		    this.handleCloseModal = this.handleCloseModal.bind(this);
		    this.selectId = this.selectId.bind(this);
		    this.selectName = this.selectName.bind(this);
		  }
	
	  handleChange(event) {
		    const target = event.target;
		    const value = target.value;
		    const name = target.name;
		    let staff = {...this.state.staff};
		    staff[name] = value;
		    this.setState({staff});
		  }
	  
	  searchStaff(staff) {
		    fetch('/api/staffs/find',{
		        method: 'POST',
		        	      headers: {
		        	        'Accept': 'application/json',
		        	        'Content-Type': 'application/json'
		        	      },
		        	      body: JSON.stringify(staff),
		        	    })
		      .then(response => response.json())
		      .then(data => this.setState({staffs: data, isLoading: false}))
		      .catch(e=>{console.log("error")})
		      .then(this.forceUpdate())
		  }
	  
	  async remove(id) {
		    await fetch(`/api/staff/${id}`, {
		      method: 'DELETE',
		      headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      }
		    }).then(() => {
		      let updatedStaffs = [...this.state.staffs].filter(i => i.id !== id); 
		      this.setState({staffs: updatedStaffs});
		    });
		  } 
		  
	  async selectId(id){
			  this.setState({selectedId: id});
		  }
		  
	  async selectName(name){
			  this.setState({selectedName: name});
		  }
		  
	  async handleOpenModal () {
			    this.setState({ showModal: true });
			  }
		  
	  async handleCloseModal () {
			    this.setState({ showModal: false });
			  }
	  
	render() {
		const {selectedId, selectedName, staff, staffs, isLoading, showModal} = this.state;
		const phoneNo = this.state.staff.phoneNo;
		const title = <h2>Advanced Staff Search</h2>;
	    const staffList = staffs.map(item => {
	    	return <tr key={staff.id}>
	        <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{item.department}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{item.position}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{item.permission}</td>
	        <td>
	          <ButtonGroup>
	            <Button size="sm" color="primary" tag={Link} to={"/staffs/" + item.id}>Edit</Button>
	            <Button size="sm" color="danger" 
	            	onClick={
	            		(event) => {
	            			this.handleOpenModal(); 
	            			this.setState(()=>{this.selectId(item.id)},
	            					()=>{this.selectName(item.name)});
	            			}
	            		}
	            >
	                Delete
	            </Button>
	          </ButtonGroup>
	        </td>
	      </tr>      
	    });
	    
	    return (
	    		<div>
	    	    <Container>
	    	      {title}
	    	        <Form>
	    	          <div className="row">
	    	            <FormGroup>
	    	              <Label for="name">Name</Label>
	    	              <Input type="text" name="name" id="name" value={staff.name || ''}
	    	                   onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup>
	    	              <Label for="department">Department</Label>
	    	              <Input type="text" name="department" id="department" value={staff.department || ''}
	    	                   onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup>
	    	              <Label for="position">Position</Label>
	    	              <Input type="text" name="position" id="position" value={staff.position || ''}
	    	                   onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <label > <input type="radio" name='gender' value="male" onChange={this.handleChange}/>M</label>
	    	          	  <label > <input type="radio" name='gender' value="female" onChange={this.handleChange}/>F</label><br/>
	    	          	  <label > <input type="radio" name='gender' value="" onChange={this.handleChange}/>Disabled</label>
	    	          	  <div>Gender: {staff.gender || ''}</div>
	    	          	</FormGroup>  
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="permission">Permission</Label>
	    	              <Input type="text" name="permission" id="permission" value={staff.permission || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>  
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="technicalTitle">TechnicalTitle</Label>
	    	              <Input type="text" name="technicalTitle" id="technicalTitle" value={staff.technicalTitle || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>  
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="degree">Degree</Label>
	    	              <Input type="text" name="degree" id="degree" value={staff.degree || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="graduatedFrom">GraduatedFrom</Label>
	    	              <Input type="text" name="graduatedFrom" id="graduatedFrom" value={staff.graduatedFrom || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	              <FormGroup className="col-md-4 mb-3">
	    	              <Label for="major">Major</Label>
	    	              <Input type="text" name="major" id="major" value={staff.major || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="yearOfGraduation">YearOfGraduation (yyyy)</Label>
	    	              <Input type="text" name="yearOfGraduation" id="yearOfGraduation" value={staff.yearOfGraduation || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="enrolledSince">EnrolledSince (yyyymmdd)</Label>
	    	              <Input type="text" name="enrolledSince" id="enrolledSince" value={staff.enrolledSince || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="phoneNo">PhoneNo</Label>
	    	              <Input type="text" name="phoneNo" id="phoneNo" value={staff.phoneNo || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="hometown">Hometown</Label>
	    	              <Input type="text" name="hometown" id="hometown" value={staff.hometown || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="yearOfBirth">YearOfBirth (yyyy)</Label>
	    	              <Input type="yearOfBirth" name="yearOfBirth" id="yearOfBirth" value={staff.yearOfBirth || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	            <FormGroup className="col-md-4 mb-3">
	    	              <Label for="remark">Remark</Label>
	    	              <Input type="text" name="remark" id="remark" value={staff.remark || ''}
	    	                     onChange={this.handleChange}/>
	    	            </FormGroup>
	    	        </div>
	    	        <FormGroup>
	    	          <Button color="primary" onClick = {(event)=>{this.searchStaff(staff);}}>
	    	            Search
	    	          </Button>
	    	          <Button color="secondary" tag={Link} to="/staffs">Cancel</Button>
	    	        </FormGroup>
	    	      </Form>
	    	    </Container>
	            <Container fluid>
	              <h4>Search Result</h4>
	              <Table className="mt-4">
	                <thead>
	                  <tr>
	                    <th width="20%">Name</th>
	                    <th width="20%">Department</th>
	                    <th>Position</th>
	                    <th width="10%">Permission</th>
	                  </tr>
	                </thead>
	                <tbody>
	                  {staffList}
	                </tbody>
	              </Table>
	            </Container>
	            <div>
	              <Modal
	  	            isOpen={this.state.showModal}
	  	            contentLabel="Confirm to delete staff"
	  	            ariaHideApp={false}
	  	          >
	                <div>Confirm to delete {selectedName}</div>
	                <button 
	                  onClick={(event) => {this.handleCloseModal(); this.remove(selectedId)}}
	                >
	                  Confirm
	                </button>
	                <button onClick={this.handleCloseModal}>Cancel</button>
	              </Modal>
	            </div>
	    	  </div>
	    );
	  }
}

export default withRouter(StaffSearch2);

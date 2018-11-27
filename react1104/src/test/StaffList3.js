import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import DeleteConfirm from './DeleteConfirm';

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
	interface StaffList3Props {
		selectedId: number;
		selectedName: string;
	    showModal: boolean;
	}
	interface StaffList3State {
	staffs: Array<Staff>;
	isLoading: boolean;
	showModal: boolean;
	}

class StaffList3 extends React.Component<StaffList3Props, StaffList3State> {
  constructor(props: StaffList3Props) {
    super(props);
    this.state = {selectedId: null, selectedName: null, staffs: [], isLoading: true, showModal: false};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.selectId = this.selectId.bind(this);
    this.selectName = this.selectName.bind(this);
  }
  
  async componentDidMount() {
	    this.setState({isLoading: true});

	    fetch('/api/staffs')
	      .then(response => response.json())
	      .then(data => this.setState({staffs: data, isLoading: false}))
	      .catch(e=>{console.log("error")})
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
	const {selectedId, selectedName, staffs, isLoading, showModal} = this.state;
	if (isLoading) {
	      return <p>Loading...</p>;
	    }
	 
	    const staffList = staffs.map(staff => {
	    	return <tr key={staff.id}>
	        <td style={{whiteSpace: 'nowrap'}}>{staff.name}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{staff.department}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{staff.position}</td>
	        <td style={{whiteSpace: 'nowrap'}}>{staff.permission}</td>
	        <td>
	          <ButtonGroup>
	            <Button size="sm" color="primary" tag={Link} to={"/staffs/" + staff.id}>Edit</Button>
	            <Button size="sm" color="danger" 
	            	onClick={
	            		(event) => {
	            			this.handleOpenModal(); 
	            			this.setState(()=>{this.selectId(staff.id)},
	            					()=>{this.selectName(staff.name)});
	            			console.log({selectedId}, {selectedName}, {showModal});
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
    	        <AppNavbar/>
    	        <Container fluid>
    	          <div className="float-right">
    	            <Button color="success" tag={Link} to="/staffs/new">Add Staff</Button>
    	            <Button color="warning" tag={Link} to="/staffs/search">Advanced Search</Button>
    	          </div>  
    	          <h3>Staff Management</h3>
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
    	          <DeleteConfirm id={this.props.selectedId} 
    	                         name={this.props.selectedName} 
    	                         show={this.props.showModal}>
    	            
    	          </DeleteConfirm>
    	        </div>
    	      </div>
    );
  }
}

export default StaffList3;
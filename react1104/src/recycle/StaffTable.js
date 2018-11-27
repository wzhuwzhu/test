import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

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
interface StaffTableProps {
	staffList: Array[staff];
}
interface StaffTableState {

}

class StaffTable extends React.Component<StaffTableProps, StaffTableState> {
  constructor(props: StaffTableProps) {
    super(props);
    this.state = {};
  }

  render(){
	  const staffList = this.props.staffs;
	  return (
	    <StaffTable>
	      <Button onClick={console.log({staffList})}>console</Button>
	    </StaffTable>
  );}
}  

export default StaffTable;
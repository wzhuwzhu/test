import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import Modal from 'react-modal';

class EditModal extends Component {
	  constructor(props) {
		    super(props);
		    this.state = {
		      staff: this.props.staff,
		      nameValid: false,
		      yearOfGraduationValid: false,
		      enrolledSinceValid: false,
		      phoneNoValid: false,
		      yearOfBirthValid: false,
		      formValid: false,
		      formErrors: {
		            name: '',
				    yearOfGraduation: '',
				    enrolledSince: '',
				    phoneNo: '',
				    yearOfBirth: ''
				    }
		    };
	  }
	  
	  validateField() {
		  var name = this.state.staff.name;
		  var yearOfGraduation = this.state.staff.yearOfGraduation;
		  var enrolledSince = this.state.staff.enrolledSince;
		  var phoneNo = this.state.staff.phoneNo;
		  var yearOfBirth = this.state.staff.yearOfBirth;
		  this.setState({
				  nameValid: 
					  ((name==null||(name=name.trim()).length==0)?false:(isNaN(name))),
				  yearOfGraduationValid:
					  ((yearOfGraduation==""||yearOfGraduation==null||yearOfGraduation.trim().length==0)?true:(/^(19|20)\d{2}$/.test(yearOfGraduation))),
				  enrolledSinceValid:
					  ((enrolledSince==""||enrolledSince==null||enrolledSince.trim().length==0)?true:(/^(19|20)\d{6}$/.test(enrolledSince))),
				  phoneNoValid: 
					  ((phoneNo==""||phoneNo==null||phoneNo.trim().length==0)?true:(/^(1)\d{10}$/.test(phoneNo))),
				  yearOfBirthValid: 
					  ((yearOfBirth==""||yearOfBirth==null||yearOfBirth.trim().length==0)?true:(/^(19|20)\d{2}$/.test(yearOfBirth)))
		  });}
	  
	  validateForm() {
		  var {nameValid, yearOfGraduationValid, enrolledSinceValid, phoneNoValid, yearOfBirthValid, formValid} = this.state;
		  this.setState({
				  formValid: (this.state.nameValid &&
						  this.state.yearOfGraduationValid &&
						  this.state.enrolledSinceValid &&
						  this.state.phoneNoValid &&
						  this.state.yearOfBirthValid),
				  formErrors: {name: (nameValid ? '' : 'Name input is invalid!'),
				          yearOfGraduation: (yearOfGraduationValid ? '' : 'Year of graduation input is invalid!'),
				          enrolledSince: (enrolledSinceValid ? '' : 'Enrolled since input is invalid!'),
				          phoneNo: (phoneNoValid ? '' : 'Phone number input is invalid!'),
				          yearOfBirth: (yearOfBirthValid ? '' : 'Year of birth input is invalid!')}
		  });}

	  async componentDidMount() {
		  const name = this.state.staff.name;
		  const yearOfGraduation = this.state.staff.yearOfGraduation;
		  const enrolledSince = this.state.staff.enrolledSince;
		  const phoneNo = this.state.staff.phoneNo;
		  const yearOfBirth = this.state.staff.yearOfBirth;
		  this.setState({
				  nameValid: 
					  ((name==null||(name=name.trim()).length==0)?false:(isNaN(name))),
				  yearOfGraduationValid:
					  ((yearOfGraduation==""||yearOfGraduation==null||yearOfGraduation.trim().length==0)?true:(/^(19|20)\d{2}$/.test(yearOfGraduation))),
				  enrolledSinceValid:
					  ((enrolledSince==""||enrolledSince==null||enrolledSince.trim().length==0)?true:(/^(19|20)\d{6}$/.test(enrolledSince))),
				  phoneNoValid: 
					  ((phoneNo==""||phoneNo==null||phoneNo.trim().length==0)?true:(/^(1)\d{10}$/.test(phoneNo))),
				  yearOfBirthValid: 
					  ((yearOfBirth==""||yearOfBirth==null||yearOfBirth.trim().length==0)?true:(/^(19|20)\d{2}$/.test(yearOfBirth)))
		  });
		  this.validateForm();
	  }
	  
	  render() {
		  /*const {nameValid, yearOfGraduationValid, enrolledSinceValid, 
		    	phoneNoValid, yearOfBirthValid, formValid, formErrors} = this.state;*/
		  return
		  <EditModal formValid={this.state.formValid}>
		    <Modal
		      contentLabel="Confirm to update/add staff"
		      ariaHideApp={false}
		      handleSubmit={this.handleSubmit}
		    >
	          <div>Confirmation edition on: {this.state.staff.name}</div>
	          <div>
	           <p key='name'>{this.state.formErrors.name}</p>
	           <p key='yearOfGraduation'>{this.state.formErrors.yearOfGraduation}</p>
	           <p key='enrolledSince'>{this.state.formErrors.enrolledSince}</p>
	  	       <p key='phoneNo'>{this.state.formErrors.phoneNo}</p>
	  	       <p key='yearOfBirth'>{this.state.formErrors.yearOfBirth}</p>
	  	      </div>
	        </Modal>
	      </EditModal>
	  }
}

export default EditModal;
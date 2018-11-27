import React, { Component } from 'react';
import { Button, ButtonGroup, Container } from 'reactstrap';
import Modal from 'react-modal';

interface DeleteConfirmProps {
	id: number;
	name: string;
    remove: func; 
    show: boolean;
}
interface DeleteConfirmState {
	
}

class DeleteConfirm extends React.Component<DeleteConfirmProps, DeleteConfirmState> {
	constructor(props: DeleteConfirmProps) {
	    super(props);
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

	render(){
		return(
				<DeleteConfirm>
				  <Modal
				    isOpen={this.props.show}
				    contentLabel="Confirm to delete staff"
				  >
				      <div>Confirm to delete {this.props.name}</div>
  	                  <button 
                        onClick={(event) => {this.remove(this.props.id)}}
                      >
                        Confirm
                      </button>
                      <button >Cancel</button>
			      </Modal>
			    </DeleteConfirm>
		)
	}
}

export default DeleteConfirm;
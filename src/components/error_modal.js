import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ErrorModal extends React.Component{
    constructor(props){

        super(props);
         this.state={
             modal:true
         }
         this.onToggleHandler.bind(this.onToggleHandler);
    }

    onToggleHandler =()=>{
        this.setState({modal:!this.state.modal})
    }

    render(){

        if(this.props.errMessage){
            return(
                <>
                
                 <Modal isOpen={this.state.modal} toggle={this.onToggleHandler} className="err-modal">
                    <ModalHeader  toggle={this.onToggleHandler} ></ModalHeader>
                    <ModalBody className="err-modal-body">
                    <h4>OOps!</h4>
                    {this.props.info}
                 </ModalBody>
                   
                </Modal>
                </>
            );
        }
        else{
            return(<div style={{display:"none"}}></div>)
        }


      
    }
}

export default ErrorModal;
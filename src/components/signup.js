import React from "react";
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            cpassword: "",
            photo: null,
            image: "",
            imgbox: "none"
        }


        this.onValueChange.bind(this.onValueChange);
        this.onSubmitHandler.bind(this.onSubmitHandler);
    }

    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {

        
        }

        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
            imgbox: "block",
            photo: event.target.files[0]
        });

    }


    onSubmitHandler = (e) => {

        e.preventDefault();

        
        const { firstname, lastname, username, password, photo } = this.state;
       
        if(!username ){
            alert(`Username field required!`);
            return;
        }
        if(!password){
            alert(` Password field required!`);
            return;
        }
        if(password !== this.state.cpassword){
            alert(` Password not matched with confirm password.`);
            return;
        }
        if(!photo ){
            alert(`Profile photo field required!`);
            return;
        }
        let formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("photo", photo, this.state.photo.name);
        this.props.props.signupUser(formData);
      
    

    }

    render() {
       
        return (
            <>
                <div className="signup">
                <div className="lock-icon">
                <div style={{ display: this.state.imgbox }}>
                                <img width="100px" height="100px" src={this.state.image} alt="profile photo" />
                            </div>
                                <i style={{ color: "#fff" }} className="material-icons">lock</i>
                            </div>
                    <div className="signup-box">
                        <div className="container">
                        <Form id="signup-form">

                         
                            <FormGroup>
                            <div className="row">
                                
                                    <div className="col-md-12">    
                                    <Label>Username</Label>
                                       <Input autoComplete="off" spellCheck="false" type="email" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Email" />
                           </div>
                                </div>
                          </FormGroup>
                            <FormGroup>
                            <div className="row">
                                
                                    <div className="col-md-12">      
                                    <Label>Password</Label>
                                      <Input autoComplete="off" spellCheck="false"
                                    type="password" name="password" value={this.state.password} onChange={this.onValueChange} id="examplePassword" placeholder="Enter Password" />
                          </div>
                                </div>
                          </FormGroup>
                            <FormGroup>
                            <div className="row">
                                
                                    <div className="col-md-12">     
                                    <Label> Confirm Password</Label>
                                        <Input autoComplete="off" spellCheck="false"
                                    type="text" name="cpassword" value={this.state.cpassword} onChange={this.onValueChange} id="exampleCPassword" placeholder="Enter Confirm Password" />
                          </div>
                                </div>
                         </FormGroup>
                       

                            <FormGroup>
                         
                                <Label for="examplePhoto">Profile Photo</Label>
                            
                                <Input type="file" name="photo" onChange={this.onImageChange} id="examplePhoto" />
                            
                            </FormGroup>

                            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                <Button onClick={this.onSubmitHandler} className="btn btn-css" style={{ width: "100%" }} >Signup</Button>

                            </div>
                        </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;
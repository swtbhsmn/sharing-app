import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import Loading from './loader';
import ErrorModal from './error_modal';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            password: "",
            screen_width:window.screen.availWidth

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    onSubmitHandler = (e) => {

        e.preventDefault();
        //alert(this.state.username + this.state.password);
        this.props.props.loginUser(this.state.username, this.state.password,this.props.props.history);
      

    }
    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <>
                <Loading isLoading={this.props.props.login_user.isLoading}/>
                <ErrorModal errMessage={this.props.props.login_user.errMess!= null?true:false} info={this.props.props.login_user.errMess}/>
                <div className="login">
                    <div className="lock-icon">
                        <i style={{ color: "#fff" }} className="material-icons">lock</i>
                    </div>

                    <div className={this.state.screen_width >= '600px'?'container-sm':'login-box'}>


                        <Form onSubmit={this.onSubmitHandler}>

                            <FormGroup>

                                <Input autoComplete="off" spellCheck="false" type="text" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Username" />
                            </FormGroup>
                            <FormGroup>

                                <Input autoComplete="off" spellCheck="false"
                                    type="password" name="password" value={this.state.password} onChange={this.onValueChange} id="examplePassword" placeholder="Enter Password" />
                            </FormGroup>
                            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                <Button type="submit" className="button-login" style={{ width: "100%" }}  >Login</Button>{' '}

                            </div>
                        </Form>


                    </div>
                </div>



            </>
        );
    }
}

export default Login;
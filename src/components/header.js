import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Button} from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.onListViewShowFalse.bind(this.onListViewShowFalse);
        this.onListViewShowTrue.bind(this.onListViewShowTrue);
        this.onClickHandlerSignin.bind(this.onClickHandlerSignin);
        this.onClickHandlerSignup.bind(this.onClickHandlerSignup);
    }
    onListViewShowFalse = () => {
        document.getElementById('discription').style.display = 'none';
        
    }
    onListViewShowTrue = () => {
        document.getElementById('discription').style.display = 'block';
     
    }
    onClickHandlerSignin = () =>{
        this.props.props.history.push("/login");
        document.getElementById('discription').style.display = 'none';
    }
    onClickHandlerSignup = () =>{
        this.props.props.history.push("/signup");
        document.getElementById('discription').style.display = 'none';
    }

    render() {
        return (
            <div>
                <header className="sub-header">
                    <Link to="/" className="brand-name text-color text-decoration-none"><span >SharePosts</span></Link>
                    
                    <span className="divider"></span>
                    <div className="text-padding show-pointer"  onMouseOver={this.onListViewShowTrue} onMouseOut={this.onListViewShowFalse}>
                    <span className="text-color ">Welcome! Sign in</span>

                    <div id="discription">
                    <div className="tringle-tip"> </div>
                      
                        <div className="description-box">
                           <Button className="btn btn-css " onClick={this.onClickHandlerSignin}>Sign In</Button>
                           <span className="line-height">New User? Please Signup</span>
                           <Button className="btn btn-css" onClick={this.onClickHandlerSignup}> Signup</Button>
                        </div>
                    </div>
                    </div>
                   
                </header>
            </div>
        );
    }
}

export default Header;
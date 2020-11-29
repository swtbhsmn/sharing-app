import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {

    render() {
        return (
            <footer className="sub-footer">
                {'Copyright © '}
                <Link color="inherit" style={{ textDecoration: "none" }} to="/">
                    <span className="text-color">Share Posts </span>
                 </Link>{' '}
                <span> {new Date().getFullYear()}</span>
                {'.'}
            </footer>
        );
    }
}

export default Footer;

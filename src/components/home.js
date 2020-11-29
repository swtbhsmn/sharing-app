import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main">
                <div className="app-container">
                       <span className="text-color"> We are here</span>
                       <span className="text-color"> for</span>
                       <span className="text-color"> share!</span>
                </div>
              
            </div>
        );
    }
}

export default Home;
import React from 'react';
import Home from './home';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Header from "./header";
import Footer from './footer';
const mapStateToProps = state => {

    return {
      state:state

    };

}

const mapDispatchToProps = dispatch => ({

   

})


class MainApp extends React.Component {

    componentDidMount=()=>{
     

        console.log(this.props);
        
    }

    render() {
        return (
            <div>
              <div className="app-header">
                    <Header props={this.props}/>
              </div>
              <div className="app-body">

             
                <Switch>

                    <Route path='/login' component={(() => {
                        return (
                            <Login props={this.props} />

                        );
                    })} />

                    <Route path='/signup' component={(() => {
                        return (
                            <Signup props={this.props} />

                        );
                    })} />

                    <Route path='/' component={(() => {
                        return (
                            <Home props={this.props} />

                        );
                    })} />

                    <Redirect to="/" />

                </Switch>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainApp));
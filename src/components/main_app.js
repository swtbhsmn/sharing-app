import React from 'react';
import Home from './home';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Header from "./header";
import Footer from './footer';
import { loginUser,fetchPosts,createPost,signupUser} from '../redux/action_creaters';

const mapStateToProps = state => {

    return {
      login_user: state.login_user,
      fetch_posts:state.fetch_posts,
      create_posts:state.create_posts,
      signup_user:state.signup_user
    };

}

const mapDispatchToProps = dispatch => ({

loginUser:(username,password,history)=>dispatch(loginUser(username,password,history)),
fetchPosts:()=>dispatch(fetchPosts()),
createPost:(title,text)=>dispatch(createPost(title,text)),
signupUser:(formData)=>dispatch(signupUser(formData))
})


class MainApp extends React.Component {

    componentDidMount=()=>{
        this.props.fetchPosts();
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
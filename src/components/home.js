import React, { Component } from 'react';
import faker from "faker";
import PostEditor from "./post_editor";
import Comment from './comment';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: ""
        };
        this.onChangeHandler.bind(this.onChangeHandler);
        this.onSubmitHandler.bind(this.onSubmitHandler);
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        alert(this.state.editorState);
    }
    render() {
        const RenderPostEditor = () => {
            if (window.localStorage.getItem('user')) {
                return (
                    <>
                        <div className="jumbotron">
                            <PostEditor createPost={this.props.props.createPost} updatePosts={this.props.props.fetchPosts} />
                        </div>
                    </>
                );
            }
            else {
                return (<div style={{ display: "none" }}></div>);
            }
        }
        return (
            <div className="main">
                <div className="container">
                    <RenderPostEditor />
                    {this.props.props.fetch_posts.userPosts.map((item, key) => {
                        return (<div key={key} className="jumbotron">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                            <h6> author {item.author}</h6>
                            <Comment/>
                        </div>);
                    })}
                </div>

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
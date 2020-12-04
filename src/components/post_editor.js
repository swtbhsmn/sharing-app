import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            title:""
        };
        this.onSubmitHandler.bind(this.onSubmitHandler);
        this.onChangeHandler.bind(this.onChangeHandler);
    }

    onChangeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        //alert(JSON.stringify(this.state.title +this.state.text));
        this.props.createPost(this.state.title,this.state.text);
        this.props.updatePosts();
    }
    render() {
      return(  <div>
        <div className="container post-container">
            <p>Create Post:</p>
        <form onSubmit={this.onSubmitHandler}>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" name="title" onChange={this.onChangeHandler} />
            </FormGroup>
            <FormGroup>
            <Label>Body</Label>
            <Input type="textarea" name="text" onChange={this.onChangeHandler} />
            </FormGroup>
            <FormGroup>
            <Button  className="btn btn-css " type="reset">Clear</Button>
            <Button style={{marginLeft:"20px"}} className="btn btn-css " type="submit">Post</Button>
            </FormGroup>
          
        </form>

        </div>
    </div>
);
    }

}

export default PostEditor;
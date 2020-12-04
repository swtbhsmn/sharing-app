import React from "react";
import { Input,Button, FormGroup} from 'reactstrap';
class Comment extends React.Component{
    render(){
        return(
            <>
     
                <form>
                    <FormGroup>
                    <Input type="textarea"/>
                    </FormGroup>
                   
                    <FormGroup>
                    <Button type="submit">Comment</Button>
                    </FormGroup>
                    
                </form>
            </>
        );
    }
}

export default Comment;
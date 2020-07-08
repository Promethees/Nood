import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card, Button} from 'semantic-ui-react'
import axios from 'axios'

const Interaction = () => {
    const [posts,setPosts] = useState([]);
    const [post,setPost] = useState([[]]);
    useEffect(() => {
        axios.get('http://localhost:5000/canteens')
            .then(res => {
                console.log(res);
                setPosts(res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    return (
    <div>
        <div>{
            posts.map((element) => {
            if (element.name === "Arise and Shine")  {           
            return(
            // let e = element.review;
            // post.map((e) => {
            // return (
            <Card style = {{padding: '10px', border: 'thick',left: '4rem', display: 'absolute'}}>
                <CommentGroup style = {{width: '200px'}}>
                    <Comment>
                        <Comment.Avatar  src = "/images/Deck.jpg"/>
                        <Comment.Content>
                            <Comment.Author>Tra Quang Minh Thong{element.user_id}<Comment.Metadata style = {{color: 'grey', display: 'inline-block'}}>2 days ago</Comment.Metadata></Comment.Author>
                            <Comment.Text>{element.comment}</Comment.Text>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Content>
                    </Comment>
                </CommentGroup>
                <Button>Click Here</Button>
                <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.close}
                />
                <Button icon = "angle double down"></Button>
            </Card> //) } ) }
            )
            }
            } ) } 
        </div>
    </div>
    );
}
const avastyle = {
    height: '1px',
    width: '1px',
    display: 'inline-block',
    

}

export default Interaction;
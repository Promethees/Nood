import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card} from 'semantic-ui-react'

const Interaction = () => {
    return (
    <Card style = {{padding: '30px', border: 'thick'}}>
    <CommentGroup>
        <Comment>
            <Comment.Avatar style = {avastyle} src = "/images/Deck.jpg"/>
            <Comment.Content>
                <Comment.Author>Tra Quang Minh Thong <Comment.Metadata style = {{color: 'grey', display: 'inline-block'}}>2 days ago</Comment.Metadata></Comment.Author>
                <Comment.Text>Meh</Comment.Text>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Content>
        </Comment>
    </CommentGroup>
    </Card>
    );
}
const avastyle = {
    height: '1vh',
    width: '1vh',
    display: 'inline-block'
}

export default Interaction;
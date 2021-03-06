import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup} from 'semantic-ui-react'

const Interaction = () => {
    return (
    <CommentGroup>
        <Comment>
            <Comment.Avatar src = "/images/Deck.jpg"/>
            <Comment.Content>
                <Comment.Author>Tra Quang Minh Thong<Comment.Metadata>2 days ago</Comment.Metadata>
                </Comment.Author>
                <Comment.Text>Meh</Comment.Text>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Content>
        </Comment>
    </CommentGroup>
    );
}

export default Interaction;
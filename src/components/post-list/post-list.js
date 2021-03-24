import React from 'react';
import './post-list.sass';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li className="list-group-item">
                <PostListItem 
                label={item.label}
                important={item.important}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;
import React from 'react';

const Comment = (props) => {
    const { id, userName, lifetimeType, createdAt, comment } = props.commentBody;
    return (
        <div className='comment'>
            <div className='comment-name'>
                <b>{userName}</b>
            </div>
            <div className='comment-date'>
                {createdAt}
            </div>
            <div className='comment-body'>
                {comment}
            </div>
        </div>
    )
}

export default Comment;
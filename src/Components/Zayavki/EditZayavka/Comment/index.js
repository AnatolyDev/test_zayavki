import React from 'react';

const Comment = (props) => {
    const { id, userName, lifetimeType, createdAt, comment } = props.commentBody;

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };

    const dt = new Date(createdAt);

    return (
        <div className='comment'>
            <div className='comment-name'>
                <b>{userName}</b>
            </div>
            <div className='comment-date'>
                {dt.toLocaleString("ru", options)}
            </div>
            <div className='comment-body'>
                {comment}
            </div>
        </div>
    )
}

export default Comment;
import React from 'react';
// import faker from '@faker-js/faker';

const CommentDetail= (props)=>{
    return(
        <div className="comment">
        <a href="/" className="avatar"> <img alt="avatar"  src={props.avater}/> </a>
          <div className="content">
              <a href="/" className="author">{props.author} </a>
                <div className="metadata">
                  <span className="date"> {props.timeAgo}  </span>
                </div>
            <div className="text">{props.newComment}</div>
          </div>
      </div>
    );
};


// export

export default CommentDetail;
//accessable from other files

import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App =()=>{
  return (
    <div className="ui container comments">
      <ApprovalCard> 
          <CommentDetail 
          author="Sam"
          timeAgo="Today at 1.40 PM" 
          newComment="its nice" 
          avater={faker.image.avatar()}
           /> 
        </ApprovalCard> 

        <ApprovalCard> 
      <CommentDetail author="ALEX"
       timeAgo="Today at 4.40 PM" 
        newComment="GOOD JOB" 
        avater={faker.image.avatar()}/>  
      </ApprovalCard> 

      <ApprovalCard> 
      <CommentDetail author="JANE"
       timeAgo="Today at 5.40 PM"
         newComment="THANKS"
          avater={faker.image.avatar()}/>  
      </ApprovalCard> 
      {/* it is a component */}

      <ApprovalCard>
        <h4>Warning</h4>
        HELLO THEIR!
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root') );

// https://github.com/faker-js/faker
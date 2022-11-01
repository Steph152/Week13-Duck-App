import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

/*

Hello! 

let e =React.createElement;

export default class Comment extends React.Component{
    render(){
        return e('div',
        {class: 'card w-75'}, 
         e('div', 
         {class: 'card header bg-success text-white'}, 
         'Username and Time'),
         e('div', 
         {class: 'card-body'},
         'Comment Content'),
         e('div', 
         {class: 'card-footer'},
            e(LikeButton, {}, null),
            e('span', {}, ''),
            e(ReplyButton, {}, null)
        )  
       );
    }
}

// first argument is type of element, the second contains the properties, third argument is the children element

*/
//JSX METHOD

export default class Comment extends React.Component{
    render(){
        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                Username and Time
                </div>
                <div className='card-body'>
                Comment Content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>    
        )
    }
}
import React from 'react';
/*
export default class LikeButton extends React.Component{
    render(){
        return React.createElement('button', {class: 'btn btn-primary'}, 'Reply');
    }
}
*/

//JSX METHOD:

export default class LikeButton extends React.Component{
    render(){
        return <button className = "btn btn-primary">Like</button>;
    }
}  
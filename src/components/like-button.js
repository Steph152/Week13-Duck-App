import React from 'react';

export default class LikeButton extends React.Component{
    render(){
        return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
    }
}
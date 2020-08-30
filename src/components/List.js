import React from 'react';

export default function(props){
    return (
        <li>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </li>
    )
}
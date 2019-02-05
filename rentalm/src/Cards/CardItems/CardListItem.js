import React from 'react';

const cardListItem = (props) =>(
    <li className="list-group-item text-left" >{props.children}</li>
);

export default cardListItem;
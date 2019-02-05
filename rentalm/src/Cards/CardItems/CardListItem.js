import React from 'react';

const cardListItem = (props) =>(
    <li className="list-group-item">{props.children}</li>
);

export default cardListItem;
import React from 'react';
import CardListItem from './CardListItem';


const detailList = (props) =>{
    const items = props.cardItems.map((it, index) =>{
        return (
            // Check into the use of keys here.
            <CardListItem key={index}>{it}</CardListItem>
        );
    });
    
    return(
        <ul>
            {items}
        </ul>
    );
}

export default detailList;
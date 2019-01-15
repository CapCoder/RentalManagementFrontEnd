import React from 'react';
import CardListItem from './CardListItem';


const CardList = (props) =>{
    const items = props.cardItems.map(it =>{
        return (
            <CardListItem>{it}</CardListItem>
        );
    });
    

    return(
        <ul>
            {items}
        </ul>
    );
    
}

export default CardList;
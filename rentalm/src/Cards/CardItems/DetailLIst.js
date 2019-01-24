import React from 'react';
import CardListItem from './CardListItem';


const detailList = (props) =>{
    console.log(props.cardItems);
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

export default detailList;
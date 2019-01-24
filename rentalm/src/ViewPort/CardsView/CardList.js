import React from 'react';
import Card from '../../Cards/PropCard';

const cardList = (props) =>{
    const cards = props.cardDetails.map(home =>{
        return(<li><Card cardTitle={home.title} cardItems={home.houseDetails}/></li>);
    });

    return(
        <ul>
            {cards}
        </ul>
    );
}

export default cardList;
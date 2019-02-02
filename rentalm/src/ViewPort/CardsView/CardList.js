import React from 'react';
import Card from '../../Cards/PropCard';

const cardList = (props) =>{
    
    const cards = props.cardDetails.map((home, index) =>{
        let id = home.ID;
        // Check the use of key here
        return(<li onClick={(e) => props.switch(id,e)} key={index} className={'cardListItem'}><Card cardTitle={home.title} cardItems={home.houseDetails}/></li>);
    });

    return(
        <ul className={'cardList'}>
            {cards}
        </ul>
    );
}

export default cardList;
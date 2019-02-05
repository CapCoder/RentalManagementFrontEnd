import React from 'react';
import Card from '../../Cards/PropCard';

const cardList = (props) =>{
    
    const cards = props.cardDetails.map((home, index) =>{
        let id = home.ID;
        return(<li onClick={(e) => props.switch(id,e)} key={id} className={'cardListItem'}><Card cardTitle={home.title} cardItems={home.houseDetails}/></li>);
    });

    return(
        <ul className={'cardList'}>
            {cards}
        </ul>
    );
}

export default cardList;
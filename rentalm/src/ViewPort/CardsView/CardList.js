import React from 'react';
import Card from '../../Cards/PropCard';

const cardList = (props) =>{
    
    const cards = props.cardDetails.map((home, index) =>{
        let id = home.ID;
        return(<Card key={id} setSelection={props.switch} selected={props.selected} homeID={id} policies={home.policies} cardTitle={home.title} cardItems={home.houseDetails}/>);
    });

    return(
        <div className="card-deck">
            {cards}
        </div>
    );
}

export default cardList;
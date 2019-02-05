import React from 'react';
import AddView from './AddViewport/AddView';
import CardList from './CardsView/CardList';

const viewPort = (props) =>{

    return(
        <>
        <div className="card-deck">
            <CardList switch={props.switchHouse} cardDetails={props.cardDetails}/>
            {/* <AddView cardItems={props.cardDetails} cardTitle={props.cardTitles}/> */}
        </div> 
        </>
    );
}

export default viewPort;
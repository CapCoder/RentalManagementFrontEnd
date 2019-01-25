import React from 'react';
import AddView from './AddViewport/AddView';
import CardList from './CardsView/CardList';

const viewPort = (props) =>{

    return(
        <>
            <CardList switch={props.switchHouse} cardDetails={props.cardDetails}/>
            {/* <AddView cardItems={props.cardDetails} cardTitle={props.cardTitles}/> */}
        </>
    );
}

export default viewPort;
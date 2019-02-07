import React from 'react';
import AddView from './AddViewport/AddView';
import CardList from './CardsView/CardList';

const viewPort = (props) =>{

    return(
        <div className="container-fluid border border-primary">
            <div className="card-deck">
                <CardList switch={props.switchHouse} selected={props.selected} cardDetails={props.cardDetails}/>
                {/* <AddView cardItems={props.cardDetails} cardTitle={props.cardTitles}/> */}
            </div> 
        </div>
    );
}

export default viewPort;
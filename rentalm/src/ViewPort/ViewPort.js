import React from 'react';
import AddView from './AddViewport/AddView';

const viewPort = (props) =>{

    return(
        <AddView cardItems={props.cardDetails} cardTitle={props.cardTitles}/>
    );
}

export default viewPort;
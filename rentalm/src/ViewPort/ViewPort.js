import React from 'react';
import AddView from './AddViewport/AddView';

const viewPort = (props) =>(
    <AddView cardItems={props.cardDetails}/>
);

export default viewPort;
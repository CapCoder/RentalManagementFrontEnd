import React from 'react';
import {Card, CardBody} from 'reactstrap'; 
import CardList from './CardItems/CardList';

const propCards = (props) =>(
    <Card>
        <CardBody>
            <CardList cardItems={props.cardItems}/>
        </CardBody>
    </Card>
);

export default propCards;
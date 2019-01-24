import React from 'react';
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'; 
import CardList from './CardItems/DetailLIst';
import CardTitleContent from '../Cards/Title/Title';

const propCards = (props) =>{

    const style = ['cards', 'text-left'];
    
    return(
        <Card className={style.join(' ')}>
            <CardTitle><CardTitleContent>{props.cardTitle}</CardTitleContent></CardTitle>
            <CardImg top width="100%" src="house.jpg"/>
            <CardBody>
                <CardList cardItems={props.cardItems}/>
            </CardBody>
        </Card>
    );
}



export default propCards;
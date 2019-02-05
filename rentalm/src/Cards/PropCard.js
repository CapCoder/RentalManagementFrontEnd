import React from 'react';
import CardList from './CardItems/DetailLIst';
import CardTiles from '../Cards/CardTiles/CardTile';

const propCards = (props) =>{

    
    const style = {
        width: '18rem',
        margin: 'auto',
    }

    return(
        <div className={'card'} style={style}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <img src="house.jpg" className="card-img-top" />
            <div className={'card-body'}>
                <CardTiles />
                <CardList cardItems={props.cardItems}/>
            </div>
        </div>
    );
}



export default propCards;
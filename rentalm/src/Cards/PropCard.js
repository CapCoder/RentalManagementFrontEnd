import React from 'react';
import CardList from './CardItems/DetailLIst';
import CardTiles from '../Cards/CardTiles/CardTile';

const propCards = (props) =>{

    
    const style = {
        width: '20rem',
        margin: 'auto',
    }

    return(
        <div className="card" style={style} onClick={(e)=> props.setSelection(props.homeID,e)}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <img src="house.jpg" className="card-img-top" alt="Main" />
            <div className='card-body'>
                <CardTiles policies={props.policies}/>
                <CardList cardItems={props.cardItems}/>
            </div>
        </div>
    );
}



export default propCards;
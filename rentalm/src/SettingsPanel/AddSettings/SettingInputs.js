import React from 'react';
import InputBox from './InputBox';

const inputList = (props) =>{
    const inputs = props.details.map(detail =>{
        return(
            <InputBox index={props.details.indexOf(detail)} startingText={detail}/>
        );
        
    });

    return(
        <>
            {inputs}
        </>
    )
}

export default inputList;
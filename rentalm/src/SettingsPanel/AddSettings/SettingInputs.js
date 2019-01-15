import React from 'react';
import InputBox from './InputBox';
import {Button} from 'reactstrap';

const inputList = (props) =>{
    const inputs = props.details.map(detail =>{
        return(
            <InputBox editDetail={props.editDetail} index={props.details.indexOf(detail)} startingText={detail}/>
        );
        
    });

    return(
        <>
            {inputs}
            <Button onClick={props.addDetail}>Add Detail</Button>
        </>
    )
}

export default inputList;
import React from 'react';
import InputBox from './InputDetailBox';
import {Button, InputGroup, InputGroupAddon} from 'reactstrap';

const inputList = (props) =>{
    const inputs = props.details[0].houseDetails.map(detail =>{
        return(
            <InputBox editDetail={props.editDetail} index={props.details[0].houseDetails.indexOf(detail)} startingText={detail}/>
        );
        
    });

    return(
        <InputGroup size="sm">
            <InputGroupAddon addonType="prepend">Details</InputGroupAddon>
            {inputs}
            <Button size="sm" onClick={props.addDetail}>Add Detail</Button>  
        </InputGroup>
    );
}

export default inputList;
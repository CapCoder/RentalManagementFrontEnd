import React from 'react';
import InputBox from './InputDetailBox';
import {Button, InputGroup, InputGroupAddon} from 'reactstrap';

const inputList = (props) =>{
    
    const inputs = props.details[props.selectedAdd].houseDetails.map((detail, index) =>{
        return(
            // Check use of key here
            <InputBox key={index} editDetail={props.editDetail} index={props.details[props.selectedAdd].houseDetails.indexOf(detail)} startingText={detail}/>
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
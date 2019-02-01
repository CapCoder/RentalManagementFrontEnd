import React from 'react';
import InputBox from './InputDetailBox';
import {Button, InputGroup, InputGroupAddon} from 'reactstrap';

const inputList = (props) =>{
    let settings=props.selectedAdd;

    const inputs = settings.details[settings.selected].houseDetails.map((detail, index) =>{
        return(
            // Check use of key here
            <InputBox key={index} editDetail={settings.editDetail} index={settings.details[settings.selected].houseDetails.indexOf(detail)} startingText={detail}/>
        );
    });

    return(
        <InputGroup size="sm">
            <InputGroupAddon addonType="prepend">Details</InputGroupAddon>
            {inputs}
            <Button size="sm" onClick={settings.addDetail}>Add Detail</Button>  
        </InputGroup>
    );
}

export default inputList;
import React from 'react';
import InputBox from './InputDetailBox';
import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';

const inputList = (props) =>{
    let settings=props.selectedAdd;

    const inputs = settings.details[settings.selected].houseDetails.map((detail, index) =>{
        return(
            // Check use of key here
            //<InputBox key={index} editDetail={settings.editDetail} index={settings.details[settings.selected].houseDetails.indexOf(detail)} startingText={detail}/>
            <inputGroup size="sm">
                <InputGroupAddon addonType="prepend">{`${settings.details[settings.selected].title} detail`}</InputGroupAddon>
                <Input type="text" name={settings.details[settings.selected].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} />
            </inputGroup>
        );
    });

    return(
        <>
            {inputs}
            <Button size="sm" onClick={settings.addDetail}>Add Detail</Button>
        </>  
    );
}

export default inputList;
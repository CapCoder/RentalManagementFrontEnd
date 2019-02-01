import React from 'react';
import {Button, InputGroup, ListGroup, ListGroupItem, Input} from 'reactstrap';

const inputList = (props) =>{
    let settings=props.selectedAdd;

    const inputs = settings.details[settings.selected].houseDetails.map((detail, index) =>{
        return(
            // Check use of key here
            //<InputBox key={index} editDetail={settings.editDetail} index={settings.details[settings.selected].houseDetails.indexOf(detail)} startingText={detail}/>
            
            <ListGroupItem><Input type="text" name={settings.details[settings.selected].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} /></ListGroupItem>
        );
    });

    return(
        <inputGroup size="sm">
            <h3>Details:</h3>
            <ListGroup>
                {inputs}
                <Button size="sm" onClick={settings.addDetail}>Add Detail</Button>
            </ListGroup>
        </inputGroup>
        
    );
}

export default inputList;
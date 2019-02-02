import React from 'react';
import {Button, InputGroup, ListGroup, ListGroupItem, Input} from 'reactstrap';

const inputList = (props) =>{
    let settings=props.selectedAdd;

    const inputs = settings.details[settings.selected].houseDetails.map((detail, index) =>{
        return(
            // Check use of key here
            <ListGroupItem><Input type="text" name={settings.details[settings.selected].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} /></ListGroupItem>
        );
    });
    

    return(
        <>
            <InputGroup size="sm">
                <h3>Title:</h3>
                <Input type="text" value={settings.details[settings.selected].title} onChange={settings.editTitle} />
            </InputGroup>
            <InputGroup size="sm">
                <h3>Details:</h3>
                <ListGroup>
                    {inputs}
                    <Button size="sm" onClick={settings.addDetail}>Add Detail</Button>
                </ListGroup>
            </InputGroup>
        </>
    );
}

export default inputList;
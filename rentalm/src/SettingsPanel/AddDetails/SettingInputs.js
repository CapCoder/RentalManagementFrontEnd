import React from 'react';
import {Button, InputGroup, ListGroup, ListGroupItem, Input} from 'reactstrap';

const inputList = (props) =>{
    let settings=props.selectedAdd;
    let selectedIndex;
    // Setting index to house based on the selected ID
    for(let i=0; i<settings.details.length; i++){
        if(settings.details[i].ID == settings.selected){
            selectedIndex = i;
        }
    }

    const inputs = settings.details[selectedIndex].houseDetails.map((detail, index) =>{
        
        return(
            // Check use of key here
            <ListGroupItem key={index}><Input type="text" name={settings.details[selectedIndex].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} /></ListGroupItem>
        );
    });
    

    return(
        <>
            <InputGroup size="sm">
                <h3>Title:</h3>
                <Input type="text" value={settings.details[selectedIndex].title} onChange={(e) => settings.editTitle(selectedIndex,e)} />
            </InputGroup>
            <InputGroup size="sm">
                <h3>Details:</h3>
                <ListGroup>
                    {inputs}
                    <Button size="sm" onClick={settings.addDetail}>Add Detail</Button>
                </ListGroup>
            </InputGroup>
            <InputGroup>
                <Button size="md" onClick={settings.addHome}>Add House</Button>
                <Button size="md" onClick={settings.removeHome}>Remove Selected House</Button>
            </InputGroup>
        </>
    );
}

export default inputList;
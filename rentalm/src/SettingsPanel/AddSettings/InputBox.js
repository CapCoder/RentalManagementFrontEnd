import React from 'react';
import {Input} from 'reactstrap';

const inputBox = (props) =>(
    <Input type="text" name={props.index} value={props.startingText} onChange={props.editDetail} />
);

export default inputBox;
import React from 'react';
import {Input} from 'reactstrap';

const inputBox = (props) =>(
    <Input type="text" valueAs={props.startingText} />
);

export default inputBox;
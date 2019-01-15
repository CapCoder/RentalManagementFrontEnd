import React from 'react';
import AddSetting from './AddSettings/AddSetting';

const settingsPanel = (props) =>(
    <AddSetting details={props.details}/>
);

export default settingsPanel;
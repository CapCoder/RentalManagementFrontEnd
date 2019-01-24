import React from 'react';
import AddSetting from './AddDetails/AddSetting';

const settingsPanel = (props) =>(
    
    <AddSetting selectedSet={props.selected} addDetail={props.addDetail} editDetail={props.editDetail} details={props.details}/>
);

export default settingsPanel;
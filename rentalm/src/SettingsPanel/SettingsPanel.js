import React from 'react';
import AddSetting from './AddSettings/AddSetting';

const settingsPanel = (props) =>(
    <AddSetting addDetail={props.addDetail} editDetail={props.editDetail} details={props.details}/>
);

export default settingsPanel;
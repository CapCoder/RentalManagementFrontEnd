import React from 'react';
import AddSetting from './AddDetails/AddSetting';

const settingsPanel = (props) =>{
    
    return(
        <AddSetting selectedSet={props.properties}/>
    );
}

export default settingsPanel;
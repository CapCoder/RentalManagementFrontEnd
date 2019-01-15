import React from 'react';
import SettingInputs from './SettingInputs';

const addSettings = (props) =>{
    return(
        <SettingInputs addDetail={props.addDetail} editDetail={props.editDetail} details={props.details}/>
    );
}
    


export default addSettings;
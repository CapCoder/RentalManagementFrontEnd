import React from 'react';
import SettingInputs from './SettingInputs';

const addSettings = (props) =>{
    return(
        <div className="container">
            <SettingInputs addDetail={props.addDetail} editDetail={props.editDetail} details={props.details}/>
        </div>
    );
}
    


export default addSettings;
import React from 'react';
import SettingInputs from './SettingInputs';

const addSettings = (props) =>{
    
    return(
        <div className="container">
            
            <SettingInputs selectedAdd={props.selectedSet}/>
        </div>
    );
}
    


export default addSettings;
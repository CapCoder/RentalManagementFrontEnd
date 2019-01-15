import React, {Component} from 'react';
import ViewPort from '../ViewPort/ViewPort';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

class Warehouse extends Component{
    state={
        houseDetails:["more things", "more other things", "another on yet"]
    }

    editDetailHandler = () =>{

    }

    render(){

        return(
            <>
                <ViewPort cardDetails={this.state.houseDetails}/>
                <SettingsPanel details={this.state.houseDetails}/>
            </>
        );
    }
}

export default Warehouse;
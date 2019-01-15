import React, {Component} from 'react';
import ViewPort from '../ViewPort/ViewPort';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

class Warehouse extends Component{
    state={
        houseDetails:[]
    }

    editDetailHandler = (e) =>{
        let newState = [...this.state.houseDetails];
        newState[e.target.name] = [e.target.value];
        this.setState({houseDetails:newState});
        console.log(this.state.houseDetails);
    }

    addDetailHandler = () =>{
        let newState = [...this.state.houseDetails, ""];
        this.setState({houseDetails:newState});
    }

    render(){

        return(
            <>
                <ViewPort cardDetails={this.state.houseDetails}/>
                <SettingsPanel addDetail={this.addDetailHandler} editDetail={this.editDetailHandler} details={this.state.houseDetails}/>
            </>
        );
    }
}

export default Warehouse;
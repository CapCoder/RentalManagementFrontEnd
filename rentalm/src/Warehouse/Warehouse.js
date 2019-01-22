import React, {Component} from 'react';
import ViewPort from '../ViewPort/ViewPort';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import '../index.css';

class Warehouse extends Component{
    state={
        homes:[
            {
                title:' ',
                houseDetails: ["test1", "test2"]
            }
        ]   
    }

    editDetailHandler = (e) =>{
        let newState = [...this.state.homes];
        console.log(e.target.name);
        newState[0].houseDetails[e.target.name] = [e.target.value];
        this.setState({houseDetails:newState});
    }

    addDetailHandler = () =>{
        let newState = [...this.state.homes[0].houseDetails, ""];
        this.setState({newState});
    }

    render(){

        return(
            <>
                <div className='cardViewport'>
                    <ViewPort cardDetails={this.state.homes}/>
                </div>
                <SettingsPanel addDetail={this.addDetailHandler} editDetail={this.editDetailHandler} details={this.state.homes}/>
            </>
        );
    }
}

export default Warehouse;
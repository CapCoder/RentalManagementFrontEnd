import React, {Component} from 'react';
import ViewPort from '../ViewPort/ViewPort';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import '../index.css';

class Warehouse extends Component{
    state={
        homes:[
            {
                title:'Test 1',
                houseDetails: ["rent1", "test1"]
            },
            {
                title: 'Test 2',
                houseDetails: ["rent2", "test2"]
            },
            {
                title: 'Test 3',
                houseDetails: ["rent3", "test3"]
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
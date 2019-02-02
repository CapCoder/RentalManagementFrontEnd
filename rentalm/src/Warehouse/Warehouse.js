import React, {Component} from 'react';
import ViewPort from '../ViewPort/ViewPort';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import '../index.css';

class Warehouse extends Component{
    state={
        homes:[
            {
                ID: 0,
                title:'Test 1',
                houseDetails: ["rent1", "test1"]
            },
            {
                ID: 1,
                title: 'Test 2',
                houseDetails: ["rent2", "test2"]
            }
        ],
        selectedHome: 0
    }

    
    editDetailHandler = (e) =>{
        let newState = [...this.state.homes];
        let selected = this.state.selectedHome;
        newState[selected].houseDetails[e.target.name] = [e.target.value];
        this.setState({houseDetails:newState});
        console.log(this.state);
    }

    editTitleHandler = (e) =>{
        let newState = [...this.state.homes];
        let selected = this.state.selectedHome;
        newState[selected].title = e.target.value;
        this.setState({houseDetails:newState});
    }

    addDetailHandler = () =>{
        let newState = [...this.state.homes];
        newState[this.state.selectedHome].houseDetails.push('');
        this.setState({houseDetails: newState});
    }

    addHouseHandler = () =>{
        let newState = [...this.state.homes];
        newState.push({ID: (newState.length), title:"Something", houseDetails: ['Fill it out']});
        this.setState({homes: newState});
        
    }

    setSelectedHome = (id) =>{
        this.setState({selectedHome: id});
    }

    render(){
        let settingsOb = {
            selected: this.state.selectedHome,
            addDetail: this.addDetailHandler,
            editDetail: this.editDetailHandler,
            details: this.state.homes,
            editTitle: this.editTitleHandler,
            addHome: this.addHouseHandler
        };

        return(
            <>
                <div className='cardViewport'>
                    <ViewPort switchHouse={this.setSelectedHome} cardDetails={this.state.homes}/>
                </div>
                <SettingsPanel properties={settingsOb} />
            </>
        );
    }
}

export default Warehouse;
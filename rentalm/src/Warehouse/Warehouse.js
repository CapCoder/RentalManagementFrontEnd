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
                houseDetails: ["rent1", "test1"],
                policies: [false, false, false, false, false],
                description: "This is a descripton of the house",
                images: []
            },
            {
                ID: 1,
                title: 'Test 2',
                houseDetails: ["rent2", "test2"],
                policies: [false, false, false, false, false],
                description: "This is another description",
                images:[]
            }
        ],
        selectedHome: 0
    }

    
    editDetailHandler = (e) =>{
        let selected = this.state.selectedHome;
        let temp = this.state.homes;
        temp[selected].houseDetails[e.target.name] = e.target.value;
        this.setState({homes: temp});
    }

    editTitleHandler = (index, e) =>{
        let temp = this.state.homes;
        console.log(index);
        temp[index].title = e.target.value;
        this.setState({homes: temp});
    }

    addDetailHandler = () =>{
        let temp = this.state.homes;
        temp[this.state.selectedHome].houseDetails.push('');
        this.setState({homes: temp});
    }

    addHouseHandler = () =>{
        let newState = [...this.state.homes];
        newState.push({ID: (newState.length), title:"Something", houseDetails: ['Fill it out'], policies: [false, false, false, false, false]});
        this.setState({homes: newState});
    }

    removeHouseHandler = () =>{
        let newState = [...this.state.homes];
        let itemPos = this.state.selectedHome;
        let filtered = newState.slice(0,itemPos).concat(newState.slice(itemPos +1, newState.length));
        this.setState({homes: filtered, selectedHome: 0});
    }

    togglePoliciesHandler = (pos) =>{
        let temp = this.state.homes;
        let selected = this.state.selectedHome;
        switch(temp[selected].policies[pos]){
            case true:
                temp[selected].policies[pos] = false;
                break;
            case false:
                temp[selected].policies[pos] = null;
                break;
            case null:
                temp[selected].policies[pos] = true;
                break;
        }
        this.setState({homes: temp});
    }

    setSelectedHome = (id) =>{
        this.setState({selectedHome: id});
    }

    imageHandler = (e) =>{
        let temp = this.state.homes;
        let imagesArr = [...e.target.files];
        imagesArr.forEach(image => {
            temp[this.state.selectedHome].images.push(URL.createObjectURL(image));
        });
        this.setState({homes: temp});
    }

    render(){
        let settingsOb = {
            selected: this.state.selectedHome,
            addDetail: this.addDetailHandler,
            editDetail: this.editDetailHandler,
            details: this.state.homes,
            editTitle: this.editTitleHandler,
            addHome: this.addHouseHandler,
            removeHome: this.removeHouseHandler,
            policyHandler: this.togglePoliciesHandler,
            imageHandler: this.imageHandler
        };

        return(
            <>
                <div className='cardViewport'>
                    <ViewPort switchHouse={this.setSelectedHome} selected={this.state.selectedHome} cardDetails={this.state.homes}/>
                </div>
                <SettingsPanel properties={settingsOb} />
            </>
        );
    }
}

export default Warehouse;
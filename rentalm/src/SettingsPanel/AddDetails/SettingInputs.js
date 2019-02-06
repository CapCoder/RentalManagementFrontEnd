import React from 'react';


const inputList = (props) =>{
    let settings=props.selectedAdd;
    let selectedIndex;
    // Setting index to house based on the selected ID
    for(let i=0; i<settings.details.length; i++){
        if(settings.details[i].ID === settings.selected){
            selectedIndex = i;
        }
    }

    const details = settings.details[selectedIndex].houseDetails.map((detail, index) =>{
        
        return(
            // Check use of key here
            <li className="list-group-item" key={index}><input className="form-control" type="text" name={settings.details[selectedIndex].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} /></li>
        );
    });
    
    const policies = () =>{
        let arrayTemp = settings.details[selectedIndex].policies;
        let buttonContainer=[];

        for(let i=0; i < arrayTemp.length; i++){
            switch(i){
                case 0:
                    if(arrayTemp[0] === true){
                        buttonContainer.push(<button className="btn btn-success" onClick={() => settings.policyHandler(0)}>Pets</button>);
                        break;
                    }else if(arrayTemp[0] === false){
                        buttonContainer.push(<button className="btn btn-danger" onClick={() => settings.policyHandler(0)}>Pets</button>);
                        break;
                    }else{
                        buttonContainer.push(<button className="btn btn-dark" onClick={() => settings.policyHandler(0)}>Pets</button>);
                        break;
                    }
                case 1:
                    if(arrayTemp[1] === true){
                        buttonContainer.push(<button className="btn btn-success" onClick={() => settings.policyHandler(1)}>Fire Pits</button>);
                        break;
                    }else if(arrayTemp[1] === false){
                        buttonContainer.push(<button className="btn btn-danger" onClick={() => settings.policyHandler(1)}>Fire Pits</button>);
                        break;
                    }else{
                        buttonContainer.push(<button className="btn btn-dark" onClick={() => settings.policyHandler(1)}>Fire Pits</button>);
                        break;
                    }
                case 2:
                    if(arrayTemp[2] === true){
                        buttonContainer.push(<button className="btn btn-success" onClick={() => settings.policyHandler(2)}>Smoking</button>);
                        break;
                    }else if(arrayTemp[2] === false){
                        buttonContainer.push(<button className="btn btn-danger" onClick={() => settings.policyHandler(2)}>Smoking</button>);
                        break;
                    }else{
                        buttonContainer.push(<button className="btn btn-dark" onClick={() => settings.policyHandler(2)}>Smoking</button>);
                        break;
                    }
                case 3:
                    if(arrayTemp[3] === true){
                        buttonContainer.push(<button className="btn btn-success" onClick={() => settings.policyHandler(3)}>pools</button>);
                        break;
                    }else if(arrayTemp[3] === false){
                        buttonContainer.push(<button className="btn btn-danger" onClick={() => settings.policyHandler(3)}>pools</button>);
                        break;
                    }else{
                        buttonContainer.push(<button className="btn btn-dark" onClick={() => settings.policyHandler(3)}>pools</button>);
                        break;
                    }
                case 4:
                    if(arrayTemp[4] === true){
                        buttonContainer.push(<button className="btn btn-success" onClick={() => settings.policyHandler(4)}>Trampolines</button>);
                        break;
                    }else if(arrayTemp[4] === false){
                        buttonContainer.push(<button className="btn btn-danger" onClick={() => settings.policyHandler(4)}>Trampolines</button>);
                        break;
                    }else{
                        buttonContainer.push(<button className="btn btn-dark" onClick={() => settings.policyHandler(4)}>Trampolines</button>);
                        break;
                    }
            }
        }
        return(buttonContainer);
    };
    
    return(
        <>
            <div className="input-group" size="sm">
                <h3>Title:</h3>
                <input type="text" className="form-control" value={settings.details[selectedIndex].title} onChange={(e) => settings.editTitle(selectedIndex,e)} />
            </div>
            <div className="input-group" size="sm">
                <h3>Details:</h3>
                <ul className="list-group">
                    {details}
                    <button className="btn btn-primary" onClick={settings.addDetail}>Add Detail</button>
                </ul>
            </div>
            <div className="input-group" size="sm">
                <button className="btn btn-primary" onClick={settings.addHome}>Add House</button>
                <button className="btn btn-primary" onClick={settings.removeHome}>Remove Selected House</button>
            </div>
            <div className="input-group" size="sm">
                {policies()}
            </div>
        </>
    );
}

export default inputList;
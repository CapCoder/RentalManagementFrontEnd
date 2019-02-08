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
    
    const purgetoryImages = settings.details[selectedIndex].images.map((image) =>{
        return(
            <li className="list-group-item" key={image}><img src={image} width="100" height="100" alt="to upload" /></li>
        );
    });

    const policies = () =>{
        let buttonContainer=[];
        let arrayTemp = settings.details[selectedIndex].policies;
    
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
    }

    return(
        <>
            <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" value={settings.details[selectedIndex].title} onChange={(e) => settings.editTitle(selectedIndex,e)} />
            </div>
            <div className="form-group">
                <label>Details:</label>
                <ul className="list-group">
                    {details}
                    <button className="btn btn-primary" onClick={settings.addDetail}>Add Detail</button>
                </ul>
            </div>
            <div className="form-group">
                <label>House Description:</label>
                <textarea className="from-control" rows="3" defaultValue={settings.details[selectedIndex].description}></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={settings.addHome}>Add House</button>
                <button className="btn btn-primary" onClick={settings.removeHome}>Remove Selected House</button>
            </div>
            {policies()}
            <div className="form-group">
                <label>file input:</label>
                <input type="file" className="form-control-file" multiple onChange={(e) => settings.imageHandler(e)}/>
                <ul className="list-group">
                    {purgetoryImages}
                </ul>
            </div>
        </>
    );

}
export default inputList;


import React from 'react';


const inputList = (props) =>{
    let settings=props.selectedAdd;
    let selectedIndex;
    // Setting index to house based on the selected ID
    for(let i=0; i<settings.details.length; i++){
        if(settings.details[i].ID == settings.selected){
            selectedIndex = i;
        }
    }

    const inputs = settings.details[selectedIndex].houseDetails.map((detail, index) =>{
        
        return(
            // Check use of key here
            <li className="list-group-item" key={index}><input className="form-control" type="text" name={settings.details[selectedIndex].houseDetails.indexOf(detail)} value={detail} onChange={settings.editDetail} /></li>
        );
    });
    

    return(
        <>
            <div className="input-group" size="sm">
                <h3>Title:</h3>
                <input type="text" className="form-control" value={settings.details[selectedIndex].title} onChange={(e) => settings.editTitle(selectedIndex,e)} />
            </div>
            <div className="input-group" size="sm">
                <h3>Details:</h3>
                <ul className="list-group">
                    {inputs}
                    <button className="btn btn-primary" onClick={settings.addDetail}>Add Detail</button>
                </ul>
            </div>
            <div className="input-group" size="sm">
                <button className="btn btn-primary" onClick={settings.addHome}>Add House</button>
                <button className="btn btn-primary" onClick={settings.removeHome}>Remove Selected House</button>
            </div>
        </>
    );
}

export default inputList;
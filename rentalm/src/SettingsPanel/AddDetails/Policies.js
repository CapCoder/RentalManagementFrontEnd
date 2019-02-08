import React from 'react';

const policies = (props) =>{
    let buttonContainer=[];

    let settings = props.policySets;
    let arrayTemp = props.pols;

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

    return(
        <div className="input-group" size="sm">
                {policies()}
        </div>
    );
}

export default policies;
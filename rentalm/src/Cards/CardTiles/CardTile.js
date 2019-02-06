import React from 'react';


const policyTile = (props) => {

    let imgStyle={
        maxWidth: "52px",
        maxHeight: "52px"
    }

    let ulStyle={
        display: "inline-block"
    }

    const tiles = () =>{
        let tempTiles = [];
        for(let i=0; i < props.policies.length; i++){
            switch(i){
                case 0:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="petBanned.png" style={imgStyle} alt="pets?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="petAllowed.png" style={imgStyle} alt="pets?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 1:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="firePitsBanned.png" style={imgStyle} alt="fire pits?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="firePitsAllowed.png" style={imgStyle} alt="fire pits?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 2:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="smokingBanned.png" style={imgStyle} alt="smoking?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="smokingAllowed.png" style={imgStyle} alt="smoking?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 3:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="poolsBanned.png" style={imgStyle} alt="pools?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="poolsAllowed.png" style={imgStyle} alt="pools?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 4:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="trampolineBanned.png" style={imgStyle} alt="trampoline?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid" src="trampolineAllowed.png" style={imgStyle} alt="trampoline?"/></li>);
                        break;
                    }else{
                        break;
                    }
            }
        }
        return tempTiles;
    }


    return(
        <div>
            <ul className="list-unstyled ">
                {tiles()}             
            </ul>
        </div>
    );
}

export default policyTile;
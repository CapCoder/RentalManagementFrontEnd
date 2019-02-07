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
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="petBanned.png" style={imgStyle} alt="pets?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="petAllowed.png" style={imgStyle} alt="pets?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 1:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="firePitsBanned.png" style={imgStyle} alt="fire pits?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="firePitsAllowed.png" style={imgStyle} alt="fire pits?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 2:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="smokingBanned.png" style={imgStyle} alt="smoking?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="smokingAllowed.png" style={imgStyle} alt="smoking?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 3:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="poolsBanned.png" style={imgStyle} alt="pools?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="poolsAllowed.png" style={imgStyle} alt="pools?"/></li>);
                        break;
                    }else{
                        break;
                    }
                    
                case 4:
                    if(props.policies[i] === false){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="trampolineBanned.png" style={imgStyle} alt="trampoline?"/></li>);
                        break;
                    }else if(props.policies[i] === true){
                        tempTiles.push(<li className="media p-1" style={ulStyle}><img className="img-fluid rounded" src="trampolineAllowed.png" style={imgStyle} alt="trampoline?"/></li>);
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
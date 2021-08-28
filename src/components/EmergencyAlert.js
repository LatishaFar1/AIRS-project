import React from "react";


function EmergencyAlert(props){
    return(props.trigger) ? (
        <div className="alert">
            <div className="alert-wrap">
            
            {props.children}
            <button className="alert-button" onClick={() => props.setTrigger(false)}>CLOSE</button>
            </div>
        </div>
    ) : "";
}


export default EmergencyAlert;
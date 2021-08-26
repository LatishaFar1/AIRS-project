import React, {useState} from "react";

function IncidentCard({incident}){
    const [resolved, setResolved] = useState([true]);

    return(
            <div className="card-container" style={{justifyContent: "center"}} >
            <div className="img-container">
                <img src={incident.image} alt={incident.avenger}  />
            </div>
                <div className="card-content">
                <div className="card-title">{incident.date}</div>
                <h2 className="card-title" style={{textDecoration: "underline dotted red"}} > Primary Avenger: {incident.avenger}</h2>
                <div className="card-complaint"> Complaint: "{incident.complaint}"</div>
                </div>
                <button className="resolveButton"  onClick={() => setResolved(!resolved)}>
                     {resolved ? "Resolved" : "Unresolved"}</button>
               
                </div>
          
    )


}


export default IncidentCard;
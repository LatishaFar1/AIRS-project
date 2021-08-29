import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function IncidentCard({incident}){
    const [resolved, setResolved] = useState(false);
    const history = useHistory();

    function handleDelete(){
        fetch("https://aqueous-refuge-86539.herokuapp.com/Incidents" + incident.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push("/")
        })
    };
    

    return(
            
            <div className="card-container" >
                <div className="img-container">
                <img src={incident.image} alt={incident.avenger}  />
                </div>
                <div className="card-content">
                <div className="card-title">{incident.date}</div>
                <h2 className="card-title" style={{textDecoration: "underline dotted red"}} > Primary Avenger: {incident.avenger}</h2>
                <div className="card-complaint"> Complaint: "{incident.complaint}"</div>
                </div>
                <button className="resolveButton"  onClick={() => setResolved(!resolved)}>
                     {resolved ? "Resolved"  : "Unresolved"}</button>
                     <br></br>
               <button className="deleteButton" onClick={handleDelete}>Delete</button>
                </div>
          
    )


}


export default IncidentCard;
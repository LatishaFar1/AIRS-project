import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function IncidentCard({incident}){
    const [resolved, setResolved] = useState([true]);
    const history = useHistory();

    function handleDelete(){
        fetch("http://localhost:3000/incidents/" + incident.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push("/incidents/new")
        })
    };

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
               <button onClick={handleDelete}>Delete</button>
                </div>
          
    )


}


export default IncidentCard;
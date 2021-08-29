import React, {useState, useEffect} from "react";
import IncidentCard from "./IncidentCard";

function IncidentsList(props){

    const [incident, setIncident] = useState([]);
 

    useEffect(() => {
        fetch("https://aqueous-refuge-86539.herokuapp.com/Incidents")
        .then(response => response.json())
        .then(data => setIncident(data))
    }, [])


    const incidentCards = incident.map((incident) => {
        return <IncidentCard incident={incident} key={incident.id}/>
    })



return (
    <div >
    <h2>Recently Reported Incidents:</h2>
       <div className="list-card">
        {incidentCards}
        </div>
    
    </div>
)


};


export default IncidentsList;
import React, {useState, useEffect} from "react";
import IncidentCard from "./IncidentCard";
function IncidentsList(props){

    const [incident, setIncident] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/incidents")
        .then(response => response.json())
        .then(data => setIncident(data))
    }, [])


    const incidentCards = incident.map((incident) => {
        console.log(incident.id)
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
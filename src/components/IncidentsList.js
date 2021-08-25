import React, {useState, useEffect} from "react";


function IncidentsList(){

    const [incident, setIncident] = useState([]);
    const [resolved, setResolved] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/incidents")
        .then(response => response.json())
        .then(data => setIncident(data))
    }, [])

return (
    <div>
    <h2>Recently Reported Incidents:</h2>
    {incident.map((incident) =>
    <div className="Incident-list">
        <h1>{incident.date}</h1>
        <h2> Primary Avenger: {incident.avenger}</h2>
        <img src={incident.image} alt={incident.avenger} />
        <h3> Complaint: "{incident.complaint}"</h3>
        <button className="resolveButton" onClick={() => setResolved(!resolved)}>
             {resolved ? "Resolved" : "Unresolved"}</button>

        </div>
    )}
    </div>
)


};


export default IncidentsList;
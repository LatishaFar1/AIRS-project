import React, {useState, useEffect} from "react";


function Team(){

    const [team, setTeam] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/lawyers")
        .then(response => response.json())
        .then(data => setTeam(data))
    }, [])
       
return (
    <div className="teamPage">
    <h2>Meet the Team:</h2>
    {team.map((team) => 
        <div className="team-card">
        <div className="team" key={team.id}>
           <img src={team.image} alt={team.name}/>
            <h2>{team.name}</h2>
            <h3>{team.Job}</h3>
            <p>{team.Email}</p>
            <p>{team.Desc}</p>
            </div>
           </div>
    )}
   </div>
)


};


export default Team;
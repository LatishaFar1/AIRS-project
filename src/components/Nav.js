import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    
    return(
        <nav className="nav">
            <h1></h1>
            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/Lawyers">Team</Link>
                <Link to="/incidents/new">Report an Incident</Link>
                <Link to="/incidents/:id">Recent Incidents</Link>
           
           </div>
        </nav>
    )
    

};


export default Nav;
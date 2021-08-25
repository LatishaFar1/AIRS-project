import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    
    return(
      
        <nav className="navbar">
            <div>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Lawyers" className="nav-link">Team</Link>
                <Link to="/incidents/new" className="nav-link">Report an Incident</Link>
                <Link to="/incidents/:id" className="nav-link">Recent Incidents</Link>
           </div>
        </nav>

    
    )
    

};




export default Nav;
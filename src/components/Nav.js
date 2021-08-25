import React from "react";
import {Link} from "react-router-dom";
import {AiFillHome, AiOutlineTeam, AiOutlineForm, AiOutlineFire} from "react-icons/ai"

function Nav(){
    
    return(
      
        <nav className="navbar">
            <div>
           < AiFillHome />
                <Link to="/" className="nav-link">Home </Link>
            < AiOutlineTeam/>    
                <Link to="/Lawyers" className="nav-link">Team</Link>
            < AiOutlineForm />    
                <Link to="/incidents/new" className="nav-link">Report an Incident</Link>
            <AiOutlineFire />
                <Link to="/incidents/:id" className="nav-link">Recent Incidents</Link>
           </div>
        </nav>

    
    )
    

};




export default Nav;
import React, {useState} from "react";


function IncidentForm(){

    const[date, setDate] =useState("");
    const[avenger, setAvenger] = useState("");
    const[complaint, setComplaint] =useState("");

    function handleSubmit(e){
        const formInfo = {date, avenger, complaint};

        fetch("http://localhost:3000/incidents", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formInfo)
        })
    };

// images for form

return (
    <>
    <h2>Report an Incident</h2>

    <form onSubmit={handleSubmit}>
    <input name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
   
    <label>Primary Avenger:</label>
    <select>
        <option value="Thor">Thor</option>
    </select>
    <textarea placeholder="complaint" name="complaint" type="text" onChange={(e) => setComplaint(e.target.value)} value={complaint}> </textarea>
    <input type="URL"  name="image" />
    <button>Submit</button>
    </form>

    </>    
) 
};


export default IncidentForm;
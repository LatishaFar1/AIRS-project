import React, {useState} from "react";


function IncidentForm(){

    const[date, setDate] =useState("");
    const[avenger, setAvenger] = useState("");
    const[complaint, setComplaint] =useState("");
    const[image, setImage] = useState("")

    function handleSubmit(e){
        const formInfo = {date, avenger, complaint, image};

        fetch("http://localhost:3000/incidents", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formInfo)
        })
    };


return (
    <>
    <h2>Report an Incident</h2>

    <form onSubmit={handleSubmit}>
        <div>
    <label>Incident Date:</label>
    <input name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
     </div>
     <div>
    <label>Primary Avenger:</label>
    <input type="text" placeholder="Avenger" name="Avenger" onChange={(e) => setAvenger(e.target.value)} value={avenger}/>
    </div>
    <div>
    <label>Complaint:</label>
    <textarea placeholder="complaint" name="complaint" type="text" onChange={(e) => setComplaint(e.target.value)} value={complaint}> </textarea>
    </div>
    <div>
    <label>Picture of the Incident:</label>
    <input type="text" placeholder="image URL" name="image" onChange={(e) => setImage(e.target.value)} value={image}/>
    </div>
    <button>Submit</button>
    </form>

    </>    
) 
};


export default IncidentForm;
import React, {useState} from "react";


function IncidentForm(){

    const[date, setDate] =useState("");
    const[avenger, setAvenger] = useState("");
    const[complaint, setComplaint] =useState("");
    const[image, setImage] = useState("")


    function handleSubmit(e){
        const formInfo = {date, avenger, complaint, image};

        fetch("https://aqueous-refuge-86539.herokuapp.com/Incidents", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formInfo)
        })
       
    };


return (
    <>
    <h2>Report an Incident</h2>
    
    <form  onSubmit={handleSubmit}>
    <div className="form">
            <div className="inputs">
    <label>Incident Date:</label>
    <br/>
    <input name="date" type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
    
    <br/>
    <label>Primary Avenger:</label>
    <br/>
    <input type="text" placeholder=" Enter Avenger" name="Avenger" onChange={(e) => setAvenger(e.target.value)} value={avenger}/>
   
    <br/>
    <label>Complaint:</label>
    <br/>
    <textarea placeholder="Type your Complaint" name="complaint" type="text" onChange={(e) => setComplaint(e.target.value)} value={complaint}> </textarea>
   
    <br/>
    <label>Picture of the Incident:</label>
    <br/>
    <input type="text" placeholder="Paste the image URL" name="image" onChange={(e) => setImage(e.target.value)} value={image}/>
    <br/>
    <button className="Button">Submit</button>
    </div>
    </div>
    </form>
  
    </>    
) 
};


export default IncidentForm;
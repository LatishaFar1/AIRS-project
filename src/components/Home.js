import React from "react";


function Home(){

    const starkLogo = "https://images-na.ssl-images-amazon.com/images/I/41-lUmt7w1L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg";
    const avengersLogo ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg/1200px-Symbol_from_Marvel%27s_The_Avengers_logo.svg.png";
return (
   <div>
    <h1 style={{fontSize: 33}}>
    <span>Avengers Incident Reporting System</span>
    </h1>
  
    <h2>A.I.R.S.</h2>
    <div style={{fontSize: 18}}>
    <p>
    This app provides a platform to report any incidents related to Avengers' (and affilates) that leads to destruction of personal and public property. </p>
    <p>Fill out the provided form and a member of our team will contact you about next steps.  </p>
    </div>

  <span> </span> <img src={avengersLogo} alt="avengers logo"></img>

  <h3>Funding provided by:</h3>
    <footer>
        <img src={starkLogo} alt="stark logo"></img>
        <p>Use of this app does not mean that any of the Avengers(or affiliates) are admitting guilt to any incidents</p>
    </footer>
    </div>
)

};


export default Home;
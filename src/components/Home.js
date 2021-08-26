import React from "react";


function Home(){

    const starkLogo = "https://images-na.ssl-images-amazon.com/images/I/41-lUmt7w1L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg";
    const shieldLogo = "https://i.etsystatic.com/9715836/r/il/030dcd/1477498432/il_570xN.1477498432_1elo.jpg"
return (
   <div>
    <h1 className="Title" style={{fontSize: 33}}>
    <span>Avengers Incident Reporting System</span>
    </h1>
  
    <h2 className="Title">A.I.R.S.</h2>
    <div className="desc" style={{fontSize: 18}}>
    <p>
    This app provides a platform to report any incidents related to Avengers' (and affiliates) that leads to destruction of personal and public property. </p>
    <>
    <p>Fill out the provided form and a member of our team will contact you about next steps.  </p>

   
   
   
   
   </>
    </div>

  

  <h3>Funding provided by:</h3>
    <footer>
        <img src={starkLogo} alt="stark logo"></img>
        <span> </span> <img style={{maxWidth: 300}}src={shieldLogo} alt="shield logo"></img>
        <p>Use of this app does not mean that any of the Avengers(or affiliates) are admitting guilt to any incidents</p>
    </footer>
    </div>
)

};


export default Home;
import React from "react";


function Home(){

    const starkLogo = "https://images-na.ssl-images-amazon.com/images/I/41-lUmt7w1L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg";
    const shieldLogo = "https://i.etsystatic.com/9715836/r/il/030dcd/1477498432/il_570xN.1477498432_1elo.jpg"
    const randLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rand_Corporation_logo.svg/1200px-Rand_Corporation_logo.svg.png";

    return (
   <div>
    <h1 className="Title" >
    <span>Avengers Incident Reporting System</span>
    </h1>
  
    <h2 className="Title2">A.I.R.S.</h2>
    <div className="desc" style={{fontSize: 18}}>
    <p>
    This app provides a platform to report any incidents related to Avengers' (and affiliates) that leads to the destruction of personal and public property. </p>
    <>
    <p>Fill out the provided form and a member of our team will contact you about next steps.  </p>

   
   
   
   
   </>
    </div>

  

  <h3>Funding provided by:</h3>
    <footer>
        <img src={starkLogo} alt="stark logo"></img>
        <span/>  <img style={{maxWidth: 300}}src={shieldLogo} alt="shield logo"></img>
        <br></br>
        <img src={randLogo} style={{maxWidth: 300}} alt="rand logo"/>
        <div >
        <p>Use of this app does not mean that any of the Avengers(or affiliates) are admitting guilt to any incidents</p>
        <p>Submission of any incidents does not guarantee immediate assistance in the case of a supervillain attack,</p>
        <span/>
        <p style={{textDecoration: "underline", color: "red"}}> please call 911 first.</p>
        </div>
    </footer>
    </div>
)

};


export default Home;
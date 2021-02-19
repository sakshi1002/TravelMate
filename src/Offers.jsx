import React from 'react';
import './index.css';
import off1 from '../src/images/offer1.jpg';
import off2 from '../src/images/offer2.jpg';
import off3 from '../src/images/offer3.jpg';

const Offers=()=>{
    return(
        <>
        <div className="offer-main">
        <center>
        <h1>Exciting Offers!</h1>
        </center>   
{/* <div className="container-fluid offers"> */}
<div className="offer-div">
  {/* col-lg-4 col-md-4 col-12 col-sm-12  myoffer*/}
    <div className="col-lg-4 col-md-4 col-12 col-sm-12 myoffer">
    <img  src={off1} alt="Card image cap" style={{width:200 ,height:350,borderRadius:5}}/>
    <p>
      <h5>Summer Offer</h5>
   </p>
   </div> 

   <div className="col-lg-4 col-md-4 col-12 col-sm-12 myoffer">
    <img src={off2} alt="Card image cap" style={{width:200 ,height:350,borderRadius:5}}/>
    <p>
      <h5>Winter Offer</h5>
   </p>
   </div> 

   <div className="col-lg-4 col-md-4 col-12 col-sm-12 myoffer">
    <img src={off3} alt="Card image cap" style={{width:200 ,height:350,borderRadius:5}}/>
    <p>
      <h5>Special Offer</h5>
   </p>
   </div>  
</div>
</div>
{/* </div> */}
    </>
    );
}

export default Offers;
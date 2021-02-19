import React from 'react';
import './index.css';
import web from '../src/images/travelmatelogo1.jpg';
import web1 from '../src/images/service.jpg';
import {NavLink} from 'react-router-dom';

const Comman =(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center navbar-expand">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 col-12 col-sm-12 col-md-6 mt-1 order-md-1 d-flex justify-content-center flex-column">
                            <h1>{props.discribe}<span style={{color:'#f05454',margin:15}}>Travel Mate</span></h1>
                            <h2 className="my-2">We help you have a great trip to your dream destination</h2>
                            <div className="mt-5">
                                <NavLink to={props.visit} className="btn-get-started">{props.button}</NavLink>
                            </div>
                            <br></br> 
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 col-12 col-sm-12 col-md-6 header-img">
                            <img src={web1} style={{width:500,height:500}} className="img-fluid-animated"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    );
}

export default Comman;
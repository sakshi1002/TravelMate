import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/s1.jpg';

const Card =(props)=>{
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={props.imgsrc} style={{height:180}} class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to="" className="btn go-btn">Go somewhere</NavLink>
                        </div>
                        </div>
                        </div>
        </>
    );
}

export default Card;
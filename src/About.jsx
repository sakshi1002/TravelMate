import React from 'react';
import './index.css';
import Comman from './Comman';
import Offers from './Offers';
import web from '../src/images/travelmatelogo1.jpg';
import {NavLink} from 'react-router-dom';

const About = ()=>{

    return(
        <>
        <Comman discribe="Know More About " button="Contact Us" visit="/Contact"/>
        <br></br>
        <Offers></Offers>
        </>
    );

}
 
export default About;
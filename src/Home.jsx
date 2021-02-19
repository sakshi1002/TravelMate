import React from 'react';
import './index.css';
import web from '../src/images/travelmatelogo1.jpg';
import {NavLink} from 'react-router-dom';
import Comman from './Comman';

const Home = ()=>{

    return(
        <>

        <Comman discribe="Make Your Trips Memorable! With" button="Get Started" visit="/About"/>

        </>
    );

}
 
export default Home;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar =()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row nav-div">
            <div className="col-10 mx-auto ">

            
        <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-none">
         <div className="container-fluid">

        <NavLink className="navbar-brand" to="/"><b>Travel Mate</b></NavLink>
               <button className="navbar-toggler" type="button" data-target="#myNavbar" data-toggle="collapse">
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
               </button>
        
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu_router" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_router" className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_router" className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_router" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
          </div>
        </div>
        </>
    );
}

export default Navbar;
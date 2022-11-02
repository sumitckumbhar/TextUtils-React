import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "aria-current="page" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={()=>{props.toogleMode('primary')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toogleMode('danger')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.toogleMode('success')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toogleMode('warning')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-light rounded mx-2" onClick={()=>{props.toogleMode('light')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                        <div className="bg-dark rounded mx-2" onClick={()=>{props.toogleMode('dark')}} style={{height: '30px',width:'30px', cursor: 'pointer'}}></div>
                    </div>
                    <div className={`form-check form-switch mx-4 text-${props.mode==='dark'?'light':'#11142f'}`}>
                        <input className="form-check-input" onClick={props.toogleMode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success mx-14" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </nav>
    )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
    aboutText : PropTypes.string}

Navbar.defaultProps = {
    title:"Set Title here",
    aboutText: "About Us"
}
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark stroke">
                        <div className='flex justify-center items-center'>
                            <img className='vertical align-baseline' src="assets/images/sklogo.png" alt="logo image" height={60} width={100}    />
                            <a className="navbar-brand" href="/">
                            SKTECHNOPROJECTS <span className='logo pl-0'>Innovation in Construction, Excellence in Delivery</span></a>
                        </div>

                        {/*if logo is image enable this   
        <a className="navbar-brand" href="#index.html">
            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
        </a> */}
                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-lg-auto">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/courses"
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header

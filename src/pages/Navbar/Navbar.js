import React from 'react'

function Navbar() {
    return (
        <>  
            <nav className="navbar bg-light fixed-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="!#"><h3>React Js Task</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-info" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">React Js Task </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-dark  justify-content-end flex-grow-1 pe-3">
                                
                                <li className="nav-item">
                                    <a className="nav-link text-dark text-uppercase" href="/">Bucket Element</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark text-uppercase" aria-current="page" href="/Infinitescroll">Infinite scroll</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link text-dark text-uppercase" href="/BoxesGame">BoxesGame</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark text-uppercase" href="/List">Nested List</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark text-uppercase" aria-current="page" href="/Square">Box Split</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

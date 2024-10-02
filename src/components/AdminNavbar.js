import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav({ Toggle }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
            <div className="container-fluid">
                <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-black"
                                href="#"
                                id="dropdownId"
                                onClick={toggleDropdown}
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                            >
                                Admin
                            </a>
                            <div className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownId">
                                <a className="dropdown-item text-black" href="#">Profile</a>
                                <a className="dropdown-item text-black" href="#">Settings</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
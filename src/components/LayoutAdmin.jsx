import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from '../components/AdminNavbar';
import './LayoutAdmin.css'; // Ensure the styles are imported

function LayoutAdmin({ children }) {
    const [isOpen, setIsOpen] = useState(true); // Default to true for better visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`layout-admin ${isOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
            <div className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-list'} fs-2`}></i> {/* Using Bootstrap Icons */}
            </div>
            <div className={`sidebar-container ${isOpen ? 'open' : 'collapsed'}`}>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className={`content ${isOpen ? 'expanded' : ''}`}>
                <Nav Toggle={toggleSidebar} />
                {children}
            </div>
        </div>
    );
}

export default LayoutAdmin;
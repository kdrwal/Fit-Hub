import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/style.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`bg-white sidebar p-2 ${isOpen ? 'open' : 'collapsed'}`}>
            <div className='m-2 d-flex justify-content-between align-items-center'>
                <span className='brand-name fs-4'>FitHub Admin Panel</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <Link to='/admin' className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span>Home</span>
                </Link>
                <Link to='/admin/dashboard' className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>Dashboard</span>
                </Link>
                <Link to='/admin/products' className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>Products</span>
                </Link>
                <Link to='/admin/trainers' className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>Trainers</span>
                </Link>
                <Link to='/admin/customers' className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>Customers</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
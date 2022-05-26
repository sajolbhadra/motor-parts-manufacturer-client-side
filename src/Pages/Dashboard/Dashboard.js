import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl text-green-400'>Dashboard</h1>
                <Outlet></Outlet>
                {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/my-review">My Review</Link></li>
                    <li><Link to="/dashboard/my-order">My Order</Link></li>
                    <li><Link to="/dashboard/add-review">Add Review</Link></li>
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                    <li><Link to="/dashboard/manage-order">Manage All Order</Link></li>
                    <li><Link to="/dashboard/add-product">Add a Product</Link></li>
                    <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manage-product">Manage Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
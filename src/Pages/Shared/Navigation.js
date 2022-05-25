import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';


const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>My Order</a></li>
            <li><a>Add Review</a></li>
            <li><a>My Profile</a></li>
            <li><a>Manage All Order</a></li>
            <li><a>Add a Product</a></li>
            <li><a>Make Admin</a></li>
            <li><a>Manage Product</a></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Motor Parts Manufacturer</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/my-order">My Order</Link></li>
          <li><Link to="/add-review">Add Review</Link></li>
          <li><Link to="/my-profile">My Profile</Link></li>
          <li><Link to="/manage-order">Manage All Order</Link></li>
          <li><Link to="/add-product">Add a Product</Link></li>
          <li><Link to="/make-admin">Make Admin</Link></li>
          <li><Link to="/manage-product">Manage Product</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About US</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <p>{user?.displayName}</p>
        </ul>
      </div>
      <div className="navbar-end">

        {
          user
            ?
            <button onClick={logout} className="btn">Sign Out</button>
            :
            <Link to="/sign-in" className="btn">Sign In</Link>
        }
      </div>
    </div>
  );
};

export default Navigation;
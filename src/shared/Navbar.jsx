import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
 let Navigate =useNavigate()
let {signOutUser, user,Auth}=useContext(AuthContext)
const handleSignOut = async () => {
  await signOutUser(Auth);
    Navigate('/') 
};

    let navOption =<>

    <Link to='/Home'>Home</Link>
    <Link to={'/ContactUs'}>CONTACT us</Link>
    <Link to={'/OurMenu'}>Our Menu</Link>
    <Link to={'/DashBord'}>DASHBOARD</Link>
<Link to={'/ourShop/cd'}>Our Shop</Link>

 <button onClick={handleSignOut}> SignOut</button> 
    



    </>
    return (
        <div className="navbar fixed z-10 opacity-30 w-[90%] mx-auto text-amber-500 md:bg-black bg-slate-700 font-extrabold   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content md:opacity-30 opacity-100  bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro boss</a>
        </div>
        <div className="navbar-center hidden lg:flex bg-black text-white">
          <ul className="menu menu-horizontal px-1">
            <div className='flex justify-center items-center gap-8'>  {navOption}</div>
           
          </ul>
        </div>
        <div className="navbar-end">
        
        </div>
      </div>
    );
};

export default Navbar;
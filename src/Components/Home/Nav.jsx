
import { use } from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';



const Nav = () => {
    const { user, logoutUser } = use(AuthContext);
    console.log(user)
    const {photoURL, displayName} = user;

    const handleLogout = () => {
        logoutUser().then(() => {
            alert('Signed out ')
        }).catch(error => {
            console.log(error)
        })
    }

    const links = <>
        <NavLink to='/' className='mr-5 font-semibold'>Home</NavLink>
        <NavLink to='/donation_campaign' className='mr-5 font-semibold'>Donation Campaign</NavLink>
        <Link className='mr-5 font-semibold'>How to help</Link>
        <NavLink to='/dashboard' className='font-semibold'>Dashboard</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"><BiSolidDonateHeart />Humanity</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?  
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><img className='w-12 h-12rounded-full' src={photoURL} alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>{displayName}</a></li>
                        <li><button onClick={handleLogout} className='btn'>Logout</button></li>
                    </ul>
                </div>
                : <Link to='/login' className="btn">Login</Link>}
                
            </div>
        </div>
    );
};

export default Nav;
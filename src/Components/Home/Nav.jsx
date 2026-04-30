
import { BiSolidDonateHeart } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';


const Nav = () => {
    const links = <>
    <NavLink to='/' className='mr-5 font-semibold'>Home</NavLink>
    <NavLink to='/donation_campaign' className='mr-5 font-semibold'>Donation Campaign</NavLink>
    <NavLink to='/help' className='mr-5 font-semibold'>How to help</NavLink>
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
                <Link to='/login' className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Nav;
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import UseAuth from "../../Hooks/UseAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navitems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {user?.email ? (
        <>
          <Link to="/bookings">My Bookings</Link>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
  return (
    <div className="navbar  bg-base-200 h-24 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5"
          >
            {navitems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  gap-6">{navitems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Apointment</button>
      </div>
    </div>
  );
};

export default Navbar;

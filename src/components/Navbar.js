import { NavLink } from "react-router-dom";
import { UseAuth } from "./Auth";

export const Navbar = () => {
  const auth = UseAuth()
  return (
    <>
      <nav className="original-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {/* <NavLink to="/movie">Movie</NavLink> */}
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {
          !auth.user && (
            <NavLink to="/login">Login</NavLink>
          )
        }
      </nav>
    </>
  );
};

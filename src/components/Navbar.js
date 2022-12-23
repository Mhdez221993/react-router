import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

const styledLink = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <NavLink style={styledLink} to="/">
        Home
      </NavLink>

      <NavLink style={styledLink} to="/about">
        About
      </NavLink>

      <NavLink style={styledLink} to="/products">
        Products
      </NavLink>

      <NavLink style={styledLink} to="/profile">
        Profile
      </NavLink>

      {!user && (
        <NavLink style={styledLink} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

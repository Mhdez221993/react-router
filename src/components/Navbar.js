import { NavLink } from "react-router-dom";

const styledLink = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

export const Navbar = () => {
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
    </nav>
  );
};

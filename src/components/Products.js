import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <input type="text" placeholder="Search..." />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>

      <Outlet />
    </>
  );
};

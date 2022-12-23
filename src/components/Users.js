import { Link, Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>

        <li>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </li>

        <li>
          {showActiveUsers ? (
            <div>Showing Active Users</div>
          ) : (
            <div>Showing All Users</div>
          )}
        </li>
      </ul>
      <Outlet />
    </>
  );
};

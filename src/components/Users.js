import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  const users = [
    { id: 1, name: "User 1 details" },
    { id: 2, name: "User 2 details" },
    { id: 3, name: "User 3 details" },
    { id: 4, name: "User 4 details" },
    { id: 5, name: "User 5 details" },
  ];
  return (
    <>
      <p>Topic: Use Params --------</p>
      <div>
        {users.map((item) => (
          <Link to={`/users/${item.id}`} key={item.id}>
            <h5>{item.name}</h5>
          </Link>
        ))}
        <Outlet />

        {/* Search Params */}
        <p>Topic: Search Params --------</p>
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active users
          </button>
          <button onClick={() => setSearchParams({})}>Reset filters</button>
        </div>
        {showActiveUsers ? (
          <h2>Show active users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
    </>
  );
}
export default Users;

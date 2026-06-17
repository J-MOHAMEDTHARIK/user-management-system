import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  return (
    <div className="container mt-4">
      <div className="py-5">
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th className="fst-italic fw-medium">ID</th>
              <th className="fst-italic fw-medium">Name</th>
              <th className="fst-italic fw-medium">Email</th>
              <th className="fst-italic fw-medium">Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="fst-italic">
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="d-flex justify-content-center gap-3">
                    <Link
                      to={`/viewuser/${user.id}`}
                      className="btn btn-primary btn-sm py-2 px-3"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edituser/${user.id}`}
                      className="btn btn-outline-primary btn-sm py-2 px-3"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={async () => {
                        await axios.delete(
                          `http://localhost:8080/user/${user.id}`,
                        );
                        loadUsers();
                      }}
                      className="btn btn-danger btn-sm py-2 px-3"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUserById();
  }, []);

  const loadUserById = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="card shadow border-0" style={{ width: "22rem" }}>
          <div className="card-body">
            <h4 className="text-center text-primary mb-3">User Profile</h4>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>ID:</b> {id}
              </li>
              <li className="list-group-item">
                <b>Name:</b> {user.name}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {user.email}
              </li>
              <li className="list-group-item">
                <b>Phone:</b> {user.phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/user", user);

    alert("User Added Successfully!");

    setUser({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4 shadow">
          <h3 className="text-center mb-4">Add User</h3>

          <form onSubmit={onsubmit}>
            <div className="mb-4 text-center">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-4 text-center">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="mb-4 text-center">
              <label className="form-label fw-bold">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={onInputChange}
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-outline-primary ">
                Add User
              </button>
              <Link to="/" className="btn btn-outline-danger ms-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;

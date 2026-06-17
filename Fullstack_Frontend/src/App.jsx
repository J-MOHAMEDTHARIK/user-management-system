import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AddUser from "./user/AddUser";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

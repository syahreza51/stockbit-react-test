import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#20232a", color: "white" }}>
    <Link
      to="/"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      OMDb Movie App
    </Link>
  </nav>
);

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "../App.css";

const Navigation = () => {
  return (
    <Navbar>
      <Nav>
        <NavItem className="nav-item">
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

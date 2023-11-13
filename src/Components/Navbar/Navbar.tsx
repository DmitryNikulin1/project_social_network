import React from "react";
import { Nav } from "./Navbar.styled";
import { MyNavLink } from "../UI/MyNavLink/MyNavLink";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <div>
          <MyNavLink to="/profile">Profile</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/messages">Messages</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/news">News</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/music">Music</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/settings">Settings</MyNavLink>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

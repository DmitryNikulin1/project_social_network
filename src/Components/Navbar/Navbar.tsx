import React from "react";
import { Nav } from "./Navbar.styled";
import { MyNavLink } from "../UI/MyNavLink/MyNavLink";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <div>
          <MyNavLink to="/Profile">Profile</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/Messages">Messages</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/News">News</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/Music">Music</MyNavLink>
        </div>
        <div>
          <MyNavLink to="/Settings">Settings</MyNavLink>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

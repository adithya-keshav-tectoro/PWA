import React from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarText,
} from "reactstrap";
import Home from "./Home";

const Navig = (a) => {
  let [n, setn] = React.useState(true);
  let [b, setb] = React.useState(true);
  return (
    <>
      {n && (
        <Navbar color="dark" dark expand light>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => {
                    setb(true);
                  }}
                  active={b}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    setb(false);
                    setn(false);
                  }}
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Welcome {a.Name}</NavbarText>
          </Collapse>
        </Navbar>
      )}
      {b && <Home />}
    </>
  );
};

export default Navig;

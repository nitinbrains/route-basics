import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

 const Header=()=> {
  return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Routing</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/about">About Us</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link to="/contact">Contact Us</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link to="/message">Messages </Link></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}
export default Header;
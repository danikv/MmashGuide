import React from 'react'
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

const NavBarItem = ({link, name, eventKey}) => {
  return (
    <LinkContainer to={link}>
      <NavItem eventKey={eventKey}>
        {name}
      </NavItem>
    </LinkContainer>
  )
}

const NavBar = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
      <Link to="/"> The Mamash Guide </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavBarItem link='/justicetable' name='Justice Table' eventKey={1}/>
        <NavBarItem link='/add' name='Serve Justice' eventKey={2}/>
        <NavBarItem link='/calander' name='Calander' eventKey={3}/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
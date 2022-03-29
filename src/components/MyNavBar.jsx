import React, { Fragment } from 'react'
import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap'

function MyNavBar(props){
    // console.log(props);
    return <Fragment>
        <Navbar color="light" expand="md" light>
    <NavbarBrand href="/">
      reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav className="me-auto" navbar >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
    </Fragment>
}

export default MyNavBar
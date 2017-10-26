import * as React from 'react';
//import { NavLink } from 'react-router-dom';
import { NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {

}

export class Header extends React.Component<Props, {}> {


  render() {
    return (
      <div>
      {/* <Button bsStyle="danger">Test  button</Button> */}
      <Navbar light expand="md">
          <NavbarBrand href="/"><b className="app-epic">EPIC</b> Shop</NavbarBrand>

            <Nav className="ap-navbar">
            <NavItem><NavLink href="/home">home</NavLink></NavItem>
            <NavItem><NavLink href="/shop">shop</NavLink></NavItem>
            <NavItem><NavLink className="ap-signin" href="/shop">Signin</NavLink></NavItem>
            </Nav>

        </Navbar>

      {/* <Navbar color="faded" light expand="md">

          <Nav>
            <NavItem><NavLink activeClassName="active" to="/home">home</NavLink></NavItem>
            <NavItem><NavLink activeClassName="active" to="/shop">shop</NavLink></NavItem>
            <NavItem><NavLink activeClassName="active" to="/shop">Signin</NavLink></NavItem>
          </Nav>
        </Navbar> */}

        </div>
    );
  }
}

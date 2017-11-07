import * as console from 'console';
import { } from 'antd/lib/button';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { UNavbar, 
  UNavLink, 
  UNavLinkSignIn, 
  UNav, 
  UNavRight, 
  UNavbarBrand, UNavItem } from '../UI-Components/UNavigation';
import { ULogo } from '../UI-Components/ULogo';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface Props {
  //  dropdownOpen: boolean;
  //  toggle: boolean;
}
// <b className="app-epic">EPIC</b> Shop 

export class Header extends React.Component<Props, {}> {

  state = {
    dropdownOpen: false
  };

  constructor(props: {}) {
    super(props);
    
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <UNavbar expand="md">
          <div style={{ width: '100%'}}>
            <div style={{ textAlign: 'center'}}>
              <UNavbarBrand href="/">
              <ULogo />
              </UNavbarBrand>
            </div>
            <div>
              <UNav>
                <UNavItem><UNavLink href="/home">home</UNavLink></UNavItem>
                <UNavItem><UNavLink href="/shop">Orders</UNavLink></UNavItem>
                <div>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret onClick={this.toggle} >
                    Admin
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                  </Dropdown>
                </div>
              </UNav>
              <UNavRight>
                <UNavItem><UNavLinkSignIn href="/shop">Signin</UNavLinkSignIn></UNavItem>
              </UNavRight>
            </div>
          </div>
        </UNavbar>
      </div>
    );
  }
}

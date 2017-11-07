import { NavLink, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from './styled-components';

//Style for Bootstrap NavBar
export const UNavbar = styled(Navbar)`
border-bottom: solid;
border-bottom-width: 1px;
border-color: #dad9d6;
position: inherit;
margin-bottom: 10px;
padding-bottom: 10px;
`;

export const UNavbarBrand = styled(NavbarBrand)`
text-align: center;
padding-bottom: 50px;
`;

export const UNav = styled(Nav)`float:left`;
export const UNavRight = styled(Nav)`float:right`;
export const UNavItem = styled(NavItem)``;

//Style for Bootstrap NavLink
export const UNavLink = styled(NavLink)`
font-family: 'Helvetica';
background-color: #dad9d6;
border-style: none;
border-radius: 0px;
color: #202126;
cursor: pointer;
align-items: center;
&:hover{
    background-color: #E80A2B; 
    color: white;
}`;

//Style for Bootstrap NavLink
export const UNavLinkSignIn = styled(NavLink)`
font-family: 'Helvetica';
border-style: none;
border-radius: 0px;
color: #202126;
cursor: pointer;
align-items: center;
&:hover{
    background-color: #E80A2B; 
    color: white;
}`;
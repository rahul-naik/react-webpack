import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDom from 'react-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar  className="nav-bg"  inverse toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand>  <img src="./images/logo.png" alt="" /></NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>Solutions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Lab Video</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Standee</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
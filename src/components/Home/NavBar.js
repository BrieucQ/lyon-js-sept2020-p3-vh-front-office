/*eslint-disable */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.scss';
import { slide as Menu } from 'react-burger-menu';
import logo from '../pictures/hypnose_vins_logo.png';
import cross from '../pictures/cross.png';
import SimpleMenu from './MenuNavBar.js';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.state = { anchorEl: null };
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <div className="navbarBody">
        <Link to="/">
          <img src={logo} alt="logo hypnose and wine" className="navbarLogo" />
        </Link>
        <div className="navbarLink">
          <ul>
            <NavLink exact to="/">
              Home
            </NavLink>
            <SimpleMenu />
            <NavLink exact to="/aboutme">
              A propos
            </NavLink>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </ul>
        </div>
        <Menu
          className="menuNavbar"
          isOpen={menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          noOverlay
          right
          width="100%"
          customCrossIcon={<img src={cross} alt="cross icon" />}
          disableAutoFocus
        >
          <Link to="/" onClick={this.closeMenu}>
            <img className="burgerLogo" src={logo} alt="logo burger" />
          </Link>
          <Link to="/" onClick={this.closeMenu}>
            Home
          </Link>
          <Link to="/events" onClick={this.closeMenu}>
            Evenements
          </Link>
          <Link to="/animators" onClick={this.closeMenu}>
            Animateurs
          </Link>
          <Link to="/products" onClick={this.closeMenu}>
            Vins & Spiritueux
          </Link>
          <Link to="/aboutme" onClick={this.closeMenu}>
            A Propos
          </Link>
          <Link to="/contact" onClick={this.closeMenu}>
            Contact
          </Link>
        </Menu>
      </div>
    );
  }
}

export default NavBar;

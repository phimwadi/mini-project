import React,{Component} from 'react'
import Config from '../config/Config'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom'


class Topbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
      };
      this.onClick = this.onClick.bind(this);
      this.logout = this.logout.bind(this);
    }
  
    onClick() {
      this.setState({
        collapse: !this.state.collapse,
      });
    }
    logout(e){
      e.preventDefault();
      Config.auth().signOut()
    }
  
    render() {
        return (
            <Router>
              <MDBNavbar color=" rgba-purple-strong" dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text">ReadMe PHUKET</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  
                  
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/Restaurant">Restaurant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Review">Review</a>
                  </li>
                  
                  
                  <MDBNavItem>
                    <MDBNavLink to="#"
                    onClick={this.logout}>Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                  
                </MDBCollapse>
              </MDBNavbar>
            </Router>
            );
          }
        }
        
          export default Topbar;
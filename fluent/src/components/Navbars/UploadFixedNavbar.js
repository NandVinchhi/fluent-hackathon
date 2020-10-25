import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";

function UploadFixedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const history = useHistory();
  if (window.sessionStorage.getItem("id") == null){
    history.push("/login-page");
    return null;
  }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute" expand="lg" style={{backgroundColor: "#1a1a1a"}}>
        <Container style = {{marginTop:"1vh", marginBottom:"1vh"}}>
          <div className="navbar-translate">
            <NavbarBrand to="/about-us" tag={Link} id="navbar-brand">
              Fluent
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem>
                <NavLink  
                  onClick={(e) => e.preventDefault()}
                >
                  <Link to = "/upload">
                    <i className="now-ui-icons arrows-1_cloud-upload-94"></i>
                    <p>Upload</p>
                  </Link>
                </NavLink>
                
              </NavItem>

              <NavItem>
                <NavLink
                  
                  onClick={(e) => e.preventDefault()}
                >
                  <Link to = "/analyze">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                    <p>Realtime Analysis</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  
                  onClick={(e) => e.preventDefault()}
                >
                  <Link to = "/admin">
                    <i className="now-ui-icons objects_globe"></i>
                    <p>Statistics</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-default"
                  color="neutral"
                  href="/logout"
                  
                >
                  <p>Logout</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UploadFixedNavbar;

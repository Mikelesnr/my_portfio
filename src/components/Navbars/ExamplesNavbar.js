/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Michael Mwanza
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* <NavItem>
              <NavLink to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Documentation
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://linkedin.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="wa.link/2qcl1f"
                target="_blank"
                title="Contact me on whatsapp"
              >
                <i className="fa fa-whatsapp" />
                <p className="d-lg-none">whatsapp</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/michael-mwanza-15630635/"
                target="_blank"
                title="View my Linkedin"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Mikelesnr"
                target="_blank"
                title="View my github"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Upgrade to Pro
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
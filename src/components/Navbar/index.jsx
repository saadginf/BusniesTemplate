import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import {
  NavContainer,
  Navlinks,
  MobileIcon,
  NavA,
  NavItem,
  Navlogo,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import logo from "../../images/logo2.PNG";
const Navbar = ({ toogle }) => {
  const [scroll, setscroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toogleHome = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <NavContainer scroll={scroll}>
        <Navlogo to="/" onClick={toogleHome}>
          <img src={logo} alt="" height="70px" />
        </Navlogo>
        <MobileIcon>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="white"
            onClick={toogle}
          />
        </MobileIcon>
        <Navlinks>
          <NavItem>
            <NavA
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavA>
          </NavItem>{" "}
          <NavItem>
            <NavA
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Sign-Up
            </NavA>
          </NavItem>
        </Navlinks>
        <NavBtn>
          <NavBtnLink to="/login">Sign-In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </>
  );
};

export default Navbar;

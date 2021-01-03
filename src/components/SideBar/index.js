import React from "react";
import {
  CloseIcon,
  SideBarContainer,
  SidBarWrapper,
  SideBarLink,
  SideBarBtnLink,
  SideBarBtnWrap,
} from "./SideBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideBarV1 = ({ isOpen, toogle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <CloseIcon>
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          color="white"
          onClick={toogle}
        />
      </CloseIcon>

      <SidBarWrapper>
        <SideBarLink to="/" onClick={toogle}>
          About
        </SideBarLink>
        <SideBarLink to="/" onClick={toogle}>
          Discover
        </SideBarLink>
        <SideBarLink to="   onClick={toogle}/">Services</SideBarLink>
        <SideBarLink to="   onClick={toogle}/">Sign-Up</SideBarLink>
      </SidBarWrapper>
      <SideBarBtnWrap>
        <SideBarBtnLink>Sign-In</SideBarBtnLink>
      </SideBarBtnWrap>
    </SideBarContainer>
  );
};

export default SideBarV1;

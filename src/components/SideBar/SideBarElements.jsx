import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const SideBarContainer = styled.div`
  z-index: 999;
  height: 100vh;
  background-color: #000;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  height: 55px;
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const SideBarLink = styled(LinkS)`
  padding: 10px;

  line-height: 16px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 25px;
  color: #fff;
  &:hover {
    color: #01bf71;
    text-decoration: none;
    border-bottom: 3px solid green;
  }
`;
export const SideBarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBarBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

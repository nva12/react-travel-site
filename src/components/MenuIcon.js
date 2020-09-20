import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../styles/mixins';

const IconContainer = styled.div`
  width: 20px;
  height: 19px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;

  .menuIconTopBar,
  .menuIconMiddleBar,
  .menuIconBottomBar {
    position: absolute;
    left: 0;
    width: 20px;
    height: 3px;
    background-color: #fff;
    transition: transform 0.3s ease-out;
  }

  .menuIconTopBar {
    top: 0;
    transform-origin: 0 0;

    ${(props) =>
      props.isOpen &&
      css`
        transform: rotate(45deg) scaleX(1.25);
      `}
  }

  .menuIconMiddleBar {
    top: 8px;
    transform-origin: 0 50%;

    ${(props) =>
      props.isOpen &&
      css`
        opacity: 0;
        transform: scaleX(0);
      `}
  }

  .menuIconBottomBar {
    bottom: 0;
    transform-origin: 0 100%;

    ${(props) =>
      props.isOpen &&
      css`
        transform: rotate(-45deg) scaleX(1.25) translateY(1px);
      `}
  }

  ${respondTo.md`display: none;`}
`;

const MenuIcon = ({ ...props }) => {
  const { isOpen, setIsOpen } = props;
  return (
    <IconContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div className={`menuIconTopBar`} />
      <div className={`menuIconMiddleBar`} />
      <div className={`menuIconBottomBar`} />
    </IconContainer>
  );
};

export default MenuIcon;

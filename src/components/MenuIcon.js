import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../styles/mixins';

// missing the closeX styles

const IconContainer = styled.div`
  ${respondTo.md`display: none;`}

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
  }

  .menuIconMiddleBar {
    top: 8px;
    transform-origin: 0 50%;
  }

  .menuIconBottomBar {
    bottom: 0;
    transform-origin: 0 100%;
  }
`;

const MenuIcon = () => (
  <IconContainer>
    <div className={`menuIconTopBar`} />
    <div className={`menuIconMiddleBar`} />
    <div className={`menuIconBottomBar`} />
  </IconContainer>
);

export default MenuIcon;

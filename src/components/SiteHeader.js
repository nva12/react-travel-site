import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import Wrapper from './Wrapper';
import Button from './Button';
import MenuIcon from './MenuIcon';
import PrimaryNav from './PrimaryNav';

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  z-index: 2;
  padding: 10px 0;
  transition: background-color 0.3s ease-out;

  .isExpanded {
    background-color: rgba(47, 85, 114, 0.55);
  }

  ${respondTo.md`
    position: fixed;
    background-color: rgba(47, 85, 114, 0.3);

    .isDark {
      background-color: rgba(23, 51, 72, 0.85);
    }
  `}
`;

const LogoContainer = styled.div`
  position: absolute;
  background-color: ${palette.primary.main};
  padding: 13px 29px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  ${respondTo.md`
    left: auto;
    transform: translateX(0);
    padding: 25px 36px;
    transform-origin: 0 0;
    transition: transform 0.3s ease-out;

    .isDark & {
      transform: scale(0.55);
    }
    `}
`;

const MenuContent = styled.div`
  opacity: 0;
  transform: scale(1.2);
  position: relative;
  z-index: -10;
  transition: all 0.3s ease-out;
  padding-top: 90px;
  text-align: center;

  ${respondTo.md`
    opacity: 1;
    z-index: 1;
    padding-top: 0;
    transform: scale(1);
    `}

  .isVisible {
    opacity: 1;
    z-index: 1;
    transform: scale(1);
  }
`;

const BtnContainer = styled.div`
  ${respondTo.md`
  float: right;
  `}
`;

const SiteHeader = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <LogoContainer>
          <img
            src={require('../images/icons/clear-view-escapes.svg')}
            alt={`logo`}
          />
        </LogoContainer>
        <MenuIcon />
        <MenuContent>
          <BtnContainer>
            <Button href="/" className="open-modal">
              Get in Touch
            </Button>
          </BtnContainer>
          <PrimaryNav />
        </MenuContent>
      </Wrapper>
    </HeaderContainer>
  );
};

export default SiteHeader;

import React from 'react';
import styled from 'styled-components';
import { respondTo, clearfix } from '../styles/mixins';

const NavContainer = styled.nav`
  padding-top: 10px;

  ${respondTo.md`
  float: right;
  padding-top: 0;
  `}

  ul {
    margin: 0;
    padding: 0;
    ${clearfix}
  }

  li {
    list-style: none;
    display: inline-block;
    padding-right: 7px;

    ${respondTo.md`
      float: left;
      display: block;
      padding-right: 20px;
    `}
  }

  li:last-child {
    padding-right: 0;

    ${respondTo.md`
      padding-right: 20px;
    `}
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    padding: 5px 8px;
    display: block;
    font-size: 0.8rem;
    background-color: rgba(47, 85, 114, 0.5);

    ${respondTo.md`
      padding: 12px 0;
      font-size: 1rem;
      background-color: transparent;
    `}
  }
`;

const PrimaryNav = () => (
  <NavContainer>
    <ul>
      <li>
        <a href="#our-beginning" id="our-beginning-link">
          Our Beginning
        </a>
      </li>
      <li>
        <a href="#features" id="features-link">
          Features
        </a>
      </li>
      <li>
        <a href="#testimonials" id="testimonials-link">
          Testimonials
        </a>
      </li>
    </ul>
  </NavContainer>
);

export default PrimaryNav;

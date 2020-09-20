import React from 'react';
import styled from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';

const StyledButton = styled.a`
  display: inline-block;
  padding: ${(props) => (props.isLarge ? `1.1rem 1.9rem` : `0.75rem 1.2rem`)};
  background-color: ${(props) =>
    props.secondary ? `${palette.secondary.main}` : `${palette.primary.main}`};
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    props.isLarge &&
    respondTo.sm`
    font-size: 1.25rem;
  `}
`;

const Button = ({ ...props }) => (
  <StyledButton
    secondary={props.secondary}
    isLarge={props.isLarge}
    onClick={props.handleModalOpen}
  >
    {props.children}
  </StyledButton>
);

export default Button;

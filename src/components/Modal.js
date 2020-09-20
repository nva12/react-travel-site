import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { palette } from '../styles/variables';
import { respondTo } from '../styles/mixins';
import SectionTitle from './SectionTitle';
import Wrapper from './Wrapper';

const modalRoot = document.getElementById('modal');

const ModalContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.94);
  z-index: 5;
  display: flex;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
`;

const InnerContainer = styled.div`
  flex: 1;
  margin: auto;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.65;
`;

const SocialIconsContainer = styled.div`
  text-align: center;
`;

const SocialIcon = styled.a`
  background-color: ${palette.secondary.main};
  display: inline-block;
  width: 33%;
  height: 72px;
  margin: 0 5px 5px 5px;
  position: relative;

  ${respondTo.sm`width: 72px;`}

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2rem;
  color: ${palette.primary.main};
  transform: scaleX(1.2);
  transform-origin: 100% 0;
  cursor: pointer;

  &:hover {
    color: ${palette.secondary.main};
  }
`;

const Modal = ({ isOpen, handleModalClose }) => {
  const handleKeyup = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup, false);

    return () => {
      document.removeEventListener('keyup', handleKeyup, false);
    };
  }, [handleKeyup]);

  return createPortal(
    <ModalContainer isOpen={isOpen}>
      <InnerContainer>
        <SectionTitle primary lessMargin>
          <img src={require('../images/icons/mail.svg')} alt={'icon'} />
          Get in <strong>Touch</strong>
        </SectionTitle>
        <Wrapper isNarrow>
          <Description>
            We will have an online order system in place soon. Until then,
            connect with us on any of the platforms below!
          </Description>
        </Wrapper>

        <SocialIconsContainer>
          <SocialIcon href={'/'}>
            <img src={require('../images/icons/facebook.svg')} alt="Facebook" />
          </SocialIcon>
          <SocialIcon href={'/'}>
            <img src={require('../images/icons/twitter.svg')} alt="Twitter" />
          </SocialIcon>
          <SocialIcon href={'/'}>
            <img
              src={require('../images/icons/instagram.svg')}
              alt="Instagram"
            />
          </SocialIcon>
          <SocialIcon href={'/'}>
            <img src={require('../images/icons/youtube.svg')} alt="YouTube" />
          </SocialIcon>
        </SocialIconsContainer>
      </InnerContainer>
      <CloseIcon onClick={handleModalClose}>X</CloseIcon>
    </ModalContainer>,
    modalRoot
  );
};

export default Modal;

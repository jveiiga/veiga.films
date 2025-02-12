import styled, { keyframes } from 'styled-components';

// Animação para o Title (vindo da direita)
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animação para o Text (vindo da esquerda)
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 0 0 7.5% 0;
  overflow: hidden; /* Garante que as animações não vazem */
`;

export const Title = styled.p`
  font-family: "Climate Crisis", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 100px;
  line-height: 1.5;
  color: #FFF;
  text-transform: upperCase;
  margin: 7.5% 0 2% 10%;
  opacity: 0; /* Inicialmente invisível */
  transform: translateX(100%); /* Começa fora da tela à direita */
  animation: ${slideInFromRight} 1s ease-out forwards;
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};

  /* Responsividade */
  @media screen and (max-width: 320px) {
    font-size: 28px;
    margin: 10% 5% 3% 5%;
    width: 90%;
  }

  @media screen and (min-width: 321px) and (max-width: 576px) {
    font-size: 30px;
    margin: 10% 5% 3% 5%;
    width: 90%;
  }

  @media screen and (min-width: 577px) and (max-width: 767px) {
    font-size: 50px;
    margin: 10% 5% 3% 5%;
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 70px;
    margin: 10% 5% 3% 5%;
    width: 90%;
  }
`;

export const Text = styled.p`
  font-family: "Didact Gothic", serif;
  font-size: 18px;
  line-height: 2.3;
  color: #FFF;
  margin: 0 0 0 10%;
  width: 30%;
  opacity: 0; /* Inicialmente invisível */
  transform: translateX(-100%); /* Começa fora da tela à esquerda */
  animation: ${slideInFromLeft} 1s ease-out forwards;
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};

  @media screen and (max-width: 320px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 0 5% 0 5%;
    width: 90%;
  }

  @media screen and (min-width: 321px) and (max-width: 576px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 0 5% 0 5%;
    width: 90%;
  }

  @media screen and (min-width: 577px) and (max-width: 767px) {
    font-size: 19px;
    line-height: 1.6;
    margin: 0 5% 0 5%;
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 19px;
    line-height: 1.6;
    margin: 0 5% 0 5%;
    width: 90%;
  }
`;


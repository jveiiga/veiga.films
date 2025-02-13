import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.section`
  width: 100%;

  /* Responsividade */
  /* Extra small devices (mini celulares, menor que 320px) */
  @media screen and (max-width: 320px) {

  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {

  }

  /* Large devices (tablets maiores/iPads, 768px - 991px) */
  @media screen and (min-width: 768px) and (max-width: 991px) {

  }

  /* Extra large devices (desktops, 992px - 1199px) */
  @media screen and (min-width: 992px) and (max-width: 1199px) {

  }

  /* Extra extra large (monitores grandes, 1200px - 1399px) */
  @media screen and (min-width: 1200px) and (max-width: 1399px) {

  }

  /* Ultra wide (1400px - 1919px) */
  @media screen and (min-width: 1400px) and (max-width: 1919px) {

  }

  /* 4K e superiores (1920px e acima) */
  @media screen and (min-width: 1920px) {

  }
`;

export const Text = styled.p`
  box-sizing: border-box;
  font-family: "Didact Gothic", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8); /* Aplica uma opacidade branca clara */
  margin: 5% 0 0 10%;
  width: 40%;
  opacity: 0; /* Inicialmente invisível */
  transform: translateX(-100%); /* Começa fora da tela à esquerda */
  &.visible {
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }

  /* Responsividade */
  /* Extra small devices (mini celulares, menor que 320px) */
  @media screen and (max-width: 320px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 10% 5% 5% 5%;
    width: 90%;
  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 10% 5% 5% 5%;
    width: 90%;
  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 10% 5% 5% 5%;
    width: 90%;
  }

  /* Large devices (tablets maiores/iPads, 768px - 991px) */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 19px;
    line-height: 1.5;
    margin: 10% 5% 5% 5%;
    width: 90%;
  }

  /* Extra large devices (desktops, 992px - 1199px) */
  @media screen and (min-width: 992px) and (max-width: 1199px) {

  }

  /* Extra extra large (monitores grandes, 1200px - 1399px) */
  @media screen and (min-width: 1200px) and (max-width: 1399px) {

  }

  /* Ultra wide (1400px - 1919px) */
  @media screen and (min-width: 1400px) and (max-width: 1919px) {

  }

  /* 4K e superiores (1920px e acima) */
  @media screen and (min-width: 1920) {
   
  }
`;


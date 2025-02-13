import styled, { keyframes } from 'styled-components';

// Animação de movimento da esquerda para a direita
const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Container = styled.section`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  overflow: hidden; 
  position: relative;
  background-color: #FFF; 
  color: #000; 

    /* Responsividade */
    @media screen and (max-width: 320px) {
      margin: 20% 0 20% 0;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
       margin: 7% 0 0 0;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
       margin: 10% 0 0 0;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      margin: 10% 0 0 0;
    }
`;

export const MarqueeText = styled.div`
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  display: inline-block;
  animation: ${marquee} 60s linear infinite; /* Animação de 20 segundos em loop */
  font-family: "Didact Gothic", serif;
  font-size: 1.7rem;
  text-transform: uppercase;
`;
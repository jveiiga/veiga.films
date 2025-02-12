import styled, { keyframes } from 'styled-components';

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Estilos do carrossel
export const CarouselContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  margin: 0 0 7.5% 0;
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  opacity: 0;

  &.active {
    opacity: 1;
    animation: ${fadeIn} 1s ease-in-out; /* Aplica a animação fadeIn */
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
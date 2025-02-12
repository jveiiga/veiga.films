import styled, { keyframes } from "styled-components";
import background from "../../../assets/images/drone.jpeg";

export const BackGroundImage = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* Imagem de fundo */
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Pseudo-elemento para a opacidade preta */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* Preto com 50% de opacidade */
    z-index: 1; 
  }

  /* Responsividade */
  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

export const Logo = styled.div`
  position: relative;
  z-index: 2;
  height: auto;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 30vw;
  }

  @media (max-width: 480px) {
    width: 40vw;
  }

  img {
    width: 100%; 
    height: auto; 
    display: block; 
  }
`;

export const Text = styled.h2`
  font-family: "Great Vibes", serif;
  font-size: 35px;
  color: #FFF;
  margin-top: 5%;
  text-align: center; 
  z-index: 2;

  /* Responsividade */
  @media (max-width: 1024px) {
    font-size: 30px; 
  }

  @media (max-width: 768px) {
    font-size: 25px; 
    margin-top: 10%; 
  }

  @media (max-width: 480px) {
    font-size: 20px; 
    margin-top: 15%; 
  }
`;

// Animação das faíscas
const sparkleAnimation = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const SparkleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Para garantir que os brilhos não interferem com a interação do texto */
`;

const Sparkle = styled.div`
  position: absolute;
  width: ${({ size }) => size || '15px'};
  height: ${({ size }) => size || '15px'};
  background-color: ${({ color }) => color || 'gold'};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ color }) => color || 'rgba(255, 215, 0, 0.8)'}, 
              0 0 20px ${({ color }) => color || 'rgba(255, 215, 0, 0.8)'};
  opacity: 0;
  animation: ${sparkleAnimation} ${({ duration }) => duration || '1.5s'} infinite ease-in-out;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation-delay: ${({ delay }) => delay};
  transform-origin: center center;

  /* Responsividade */
  @media (max-width: 768px) {
    width: ${({ size }) => `calc(${size} * 0.8)` || '12px'};
    height: ${({ size }) => `calc(${size} * 0.8)` || '12px'};
  }

  @media (max-width: 480px) {
    width: ${({ size }) => `calc(${size} * 0.6)` || '10px'};
    height: ${({ size }) => `calc(${size} * 0.6)` || '10px'};
  }
`;

export function SparkleEffect({ children }) {
  const sparkles = [
    { top: '10%', left: '10%', delay: '0s', size: '10px', color: 'lightgreen', duration: '1s' },
    { top: '20%', left: '70%', delay: '0.5s', size: '8px', color: 'lightgreen', duration: '1.2s' },
    { top: '70%', left: '20%', delay: '1s', size: '12px', color: 'lightgreen', duration: '1.4s' },
    { top: '80%', left: '80%', delay: '1.5s', size: '15px', color: 'lightgreen', duration: '1.6s' },
    { top: '50%', left: '50%', delay: '2s', size: '20px', color: 'lightgreen', duration: '1.8s' },
  ];

  return (
    <Container>
      <SparkleContainer>
        {sparkles.map((sparkle, index) => (
          <Sparkle 
            key={index}
            top={sparkle.top} 
            left={sparkle.left} 
            delay={sparkle.delay}
            size={sparkle.size}
            color={sparkle.color}
            duration={sparkle.duration}
          />
        ))}
      </SparkleContainer>
      {children}
    </Container>
  );
}


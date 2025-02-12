import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  1% {
    visibility: visible; /* Torna visível no início da animação */
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible; /* Garante que permaneça visível após a animação */
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 7.5% 0 7.5% 0;

    /* Responsividade */
    @media screen and (max-width: 320px) {
      padding: 0 5%; /* Adiciona um espaçamento lateral em tablets */
    }
`;

export const Title = styled.h2`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    line-height: 1.5;
    color: #FFF;
    text-align: center;
    text-transform: upperCase;
    position: relative;
    margin: 0 0 3% 0;
    visibility: hidden; /* Inicialmente invisível */
    ${({ isVisible }) => isVisible && css`
        animation: ${slideUp} 2s ease-out forwards;
    `};
    
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const ContainerPhotos = styled.div`
    background-color: #000;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 70vw;
    height: 100vh;
    position: relative;
    top: -50px;
    overflow: hidden;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        top: -20px;
        width: 90vw;
    }

    @media screen and (max-width: 320px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        overflow: scroll;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 90vw;
        overflow: scroll;

    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 80vw;
        overflow: scroll;

    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(5, 1fr);
        width: 85vw;
        overflow: scroll;
    }
`;

export const PhotoBox = styled.div`
    background-color: #CCC;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    opacity: 0;
    cursor: pointer;
    ${({ isVisible, delay }) => isVisible && css`
        animation: ${fadeIn} 1s ease-out forwards;
        animation-delay: ${delay}s;
    `};

  @media screen and (max-width: 320px) {
       height: 50vh;
  }

  @media screen and (min-width: 321px) and (max-width: 576px) {
       height: 50vh;
  }

  @media screen and (min-width: 577px) and (max-width: 767px) {
       height: 50vh;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
       height: 50vh;
  }
  
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
`;
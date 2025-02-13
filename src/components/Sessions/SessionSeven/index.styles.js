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

const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    margin: 7.5% 0 0 0;

    /* Responsividade */
    @media screen and (max-width: 320px) {
      margin: 0 0 7.5% 0;
  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
    margin: 0 0 7.5% 0;

  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {

  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
  
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
    text-transform: uppercase;
    position: relative;
    margin: 0 0 3% 0;
    visibility: hidden; /* Inicialmente invisível */
    ${({ isVisible }) => isVisible && css`
        animation: ${slideUp} 2s ease-out forwards;
    `};

    @media screen and (max-width: 320px) {
    font-size: 28px;
  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
    font-size: 28px;
  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {
    font-size: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 80px;
    }

    @media screen and (min-width: 992px) and (max-width: 1358px) {
      font-size: 80px;
    }
`;

export const ContainerPhotos = styled.div`
    background-color: #000;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 70vw;
    position: relative;
    top: -50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 90vw;
        top: -20px;
    }

    @media (max-width: 320px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 100vw;
    }

    @media (min-width: 321px) and (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 90vw;
    }

    @media (min-width: 577px) and (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        width: 80vw;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        width: 85vw;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 70vw;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 70vw;
    }
`;

export const PhotoText = styled.p`
    position: absolute;
    bottom: 10px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px 10px;
    font-size: 1.2rem;
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    opacity: 0;
    transform: translateY(10px);
    transition: background-color 0.3s ease, color 0.3s ease;

    ${({ isVisible }) => isVisible && css`
        animation: ${textFadeIn} 1s ease-out forwards;
    `};
`;

export const PhotoBox = styled.div`
    position: relative;
    background-color: #CCC;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: top;
    opacity: 0;
    cursor: pointer;
    ${({ isVisible, delay }) => isVisible && css`
        animation: ${fadeIn} 1s ease-out forwards;
        animation-delay: ${delay}s;
    `};

    &:hover ${PhotoText} {
        background-color: rgba(255, 255, 255, 0.8);
        color: #000;
    }

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

  @media screen and (min-width: 992px) {
       height: 30vh;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    color: white;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-style: normal;
`;

export const ModalImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 80vh;
    margin-bottom: 10px;
`;

export const NavigationButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    ${({ left }) => left && css`
        left: 10px;
    `}

    ${({ right }) => right && css`
        right: 10px;
    `}
`;
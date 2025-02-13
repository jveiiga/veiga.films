import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 15%;
`;

export const ContainerCentral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
`;

export const ContainerTitle = styled.div`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 19px;
    line-height: 1.6;
    color: #FFF;
    margin-bottom: 2rem;
`;

export const ContainerNumbers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    gap: 2rem;
    width: 80%;

    & > div:nth-child(5) {
        grid-column: span 2;
        justify-self: center;
    }

    @media screen and (max-width: 320px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Box = styled.div``;

export const Text = styled.h2`
    /* flex-wrap: wrap; */
    color: #FFF;
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-transform: uppercase;
    margin: 0 0 5% 0;
    opacity: 0;
    transition: opacity 1s ease-out;

    &.visible {
        animation: ${fadeIn} 1s ease-out forwards;
    }

    @media screen and (max-width: 320px) {
        font-size: 28px;;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 50px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 70px;
    }

    @media screen and (min-width: 992px) and (max-width: 1358px) {
        font-size: 80px;
    }
`;

export const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
`;

export const Prod = styled.p`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 18px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 18px;
    }
`;

export const ProdNumber = styled.p`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 28px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 50px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 60px;
    }
`;

export const Days = styled.p`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 18px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 18px;
    }
`;

export const DaysNumber = styled.p`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 28px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 40px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 60px;
    }
`;

export const Videos = styled.p`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 18px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 18px;
    }
`;

export const VideosNumber = styled.p`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 28px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 40px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 60px;
    }
`;

export const Brands = styled.p`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 18px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 18px;
    }
`;

export const BrandsNumber = styled.p`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 28px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 40px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 60px;
    }
`;

export const Years = styled.p`
    box-sizing: border-box;
    font-family: "Didact Gothic", serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 18px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 18px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 18px;
    }
`;

export const YearsNumber = styled.p`
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 5rem;
    color: white;
    text-align: center;

    @media screen and (max-width: 320px) {
        font-size: 28px;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
        font-size: 28px;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 40px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 60px;
    }
`;  




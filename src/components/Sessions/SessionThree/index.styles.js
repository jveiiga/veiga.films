import styled from 'styled-components';

export const Container = styled.section`
  // border: 1px solid #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Responsividade */
  @media screen and (max-width: 320px) {
    height: 70vh;
    padding: 0 5%; /* Adiciona um espaçamento lateral em tablets */
    width: 100%;
  }

  @media screen and (min-width: 321px) and (max-width: 576px) {
    height: 70vh;
    padding: 0 5%; /* Adiciona um espaçamento lateral em tablets */
    width: 100%;
  }

  @media screen and (min-width: 577px) and (max-width: 767px) {
    height: 70vh;
    padding: 0 5%; /* Adiciona um espaçamento lateral em tablets */
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 70vh;
  }
`;

export const ContainerVideo = styled.iframe`  
  // border: 1px solid #fff;
  width: 60vw;
  height: 55vh;

  /* Responsividade */
  @media screen and (max-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 321px) and (max-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 577px) and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  
  @media screen and (min-width: 992px) and (max-width: 1366px) {
    width: 90%;
    height: 80vh;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  margin: 2% 0 0 0;

  @media screen and (max-width: 320px) {
      width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
      width: 100%;
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
        width: 50vw;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 50vw;

    }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  width: 100%;
  height: 7vh;
  transition: background-color 0.5s ease;
  text-transform: uppercase;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;


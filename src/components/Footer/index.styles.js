import styled from 'styled-components';

export const ContainerFooter = styled.section`
  width: 100vw;
  display: flex;
  padding: 5% 0 5% 0;


  /* Responsividade */
  /* Extra small devices (mini celulares, menor que 320px) */
  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 10% 10%;
  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
    flex-direction: column;
    padding: 10% 10%;
  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {
    flex-direction: column;
    padding: 10% 10%;
  }

  /* Large devices (tablets maiores/iPads, 768px - 991px) */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    padding: 10% 10%;
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
  @media screen and (min-width: 1920 ▋
   
  }
`

export const Text = styled.p`
  width: 50vw;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;

  /* Responsividade */
  /* Extra small devices (mini celulares, menor que 320px) */
  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 10% 10%;
  }

  /* Small devices (celulares, 320px - 576px) */
  @media screen and (min-width: 321px) and (max-width: 576px) {
    justify-content: flex-start;
  }

  /* Medium devices (tablets menores, 577px - 767px) */
  @media screen and (min-width: 577px) and (max-width: 767px) {
    justify-content: flex-start;

  }

  /* Large devices (tablets maiores/iPads, 768px - 991px) */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
  }

`

export const SocialMedia = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextFollow = styled.p`
    color: #FFF;
    font-size: 26px;
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin: 2% 0 2% 0;
`

export const TextReserved = styled.p`
    color: #FFF;
    font-size: 26px;
`
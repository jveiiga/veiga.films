import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h2`
    width: 40%;
    color: #FFF;
    font-family: "Climate Crisis", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    text-transform: upperCase;
    margin: 0 0 5% 0;

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
      font-size: 60px;
      margin: 10% 5% 3% 5%;
      width: 90%;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 80px;
      margin: 10% 5% 3% 5%;
      width: 90%;
    }
` 

export const ContainerForm = styled.form`  
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Responsividade */
    @media screen and (max-width: 320px) {
      width: 90%
    }

    @media screen and (min-width: 321px) and (max-width: 576px) {
      width: 90%
    }

    @media screen and (min-width: 577px) and (max-width: 767px) {
      width: 90%
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 90%
    }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
    color: #FFF;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
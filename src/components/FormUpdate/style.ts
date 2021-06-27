import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const DivForm = styled.div`
  width: 28vw;
  min-width: 380px;
  height: 100vh;
  min-height: 91%;
  max-height: 536px;

  background-color: #fff;
  padding: 48px 55px 80px 55px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media (max-width: 420px) {
    min-width: 296px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivFiled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #7f63f4;
  color: #fff;
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  margin: 20px 0 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const Title = styled.h1`
  color: #03014c;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.p`
  margin: 18px 0 10px 0;
`;

export const TextFieldStyled = styled(TextField)`
  .MuiInput-formControl {
    margin: 24px 0;
    font-weight: 300;
  }

  .MuiFormLabel-root {
    font-size: 14px;
    font-weight: 300;
    color: #03014c;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
`;

import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const DivForm = styled.div`
  width: 28vw;
  min-width: 380px;
  height: 75vh;
  min-height: 77%;
  max-height: 500px;

  background-color: #fff;
  padding: 40px 55px 80px 55px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media (max-width: 420px) {
    box-shadow: none;
    padding: 75px 0px 80px 0px;
    min-width: 258px;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  @media (max-width: 420px) {
    background-color: #fff;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivFiled = styled.div`
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
  margin: 15px 0 10px 0;

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
  font-size: 32px;
  margin: 20px 0 13px 0;
`;

export const TextFieldStyled = styled(TextField)`
  .MuiInput-formControl {
    margin: 16px 0;
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
  display: flex;
`;

export const Span = styled.p`
  margin-left: 10px;
  color: #2ea5d5;
  cursor: pointer;
`;

import styled from "styled-components";

export const DivForm = styled.div`
  width: 64vw;
  min-width: 380px;
  height: 58vh;
  min-height: 91%;
  max-height: 536px;

  background-color: #fff;
  padding: 30px;
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
  justify-content: space-between;
`;

export const DivButton = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 869px) {
    width: 100%;
  }
`;

export const DivImagem = styled.div`
  width: 75%;

  @media (max-width: 869px) {
    display: none;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.h1`
  font-weight: bold;
  font-size: 25px;
`;

export const DivBTN = styled.div`
  display: flex;
`;

export const ButtonOne = styled.button`
  background-color: #fff;
  color: #837cf4;
  border: 1px solid #837cf4;
  width: 140px;
  height: 48px;
  outline: none;
  border-radius: 6px;
  font-size: 15px;
  margin: 20px 0 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 420px) {
    width: 109px;
  }
`;

export const ButtonTwo = styled(ButtonOne)`
  background-color: #7f63f4;
  color: #fff;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const DivText = styled.div`
  width: 100%;
  margin: 20px;
`;

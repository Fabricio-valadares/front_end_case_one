import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f6f9;
`;

export const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
`;

export const DivText = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  min-width: 200px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 29%;
    height: 72%;
  }
`;

export const Title = styled.p`
  width: 180px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 87%;
    height: 77%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 15%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p``;

export const Span = styled.span`
  color: #837cf4;
`;

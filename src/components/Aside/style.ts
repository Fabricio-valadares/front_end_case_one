import styled from "styled-components";
import { MdDashboard, MdEmail, MdShoppingCart } from "react-icons/md";

export const Container = styled.div`
  width: 18.6%;
  height: 100%;
  background-color: #fff;
  min-width: 210px;

  @media (max-width: 869px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #abafb3;
  text-align: center;
  padding-left: 10px;
`;

export const DivTitle = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 10%;
`;

export const DivSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 7%;
  margin-top: 20px;
`;

export const Session = styled.div`
  width: 105%;
  padding: 24px 0 24px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: #f2efff;
    cursor: pointer;
    margin-left: -5%;
    border-left: 5px solid #837cf4;
  }
`;

export const DivIcon = styled.div`
  &:hover {
    path {
      background-color: #5b5881;
    }
  }
`;

export const Text = styled.p`
  padding-left: 15px;
  color: #6a707e;
  font-weight: bold;

  &:hover {
    color: #837cf4;
  }
`;

export const MdDashboardStyled = styled(MdDashboard)`
  &:hover {
    color: #837cf4;
  }
`;

export const DivText = styled.div`
  background-color: #e5e0fd;
  color: #837cf4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  width: 95%;
  height: 30px;
`;

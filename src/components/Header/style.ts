import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 12vh;

  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivContainer = styled.div`
  width: 60%;
  height: 12vh;

  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 31%;
  height: 12vh;
  min-width: 210px;
  background-color: #837cf4;
  color: #fff;
  font-weight: bold;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.input`
  width: 100%;
  height: 7vh;
  border: none;
  outline: none;
  background-color: #f3f3f3;

  &::placeholder {
    position: absolute;
    left: 0;
    top: 17px;
  }
`;

export const Logout = styled.div`
  color: #080f18;
  width: 10%;
  height: 10vh;
  font-weight: 400;
  font-size: 19px;

  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 869px) {
    display: none;
  }
`;

export const FieldSearch = styled.div`
  width: 38%;
  height: 8vh;
  padding: 0 20px 0 0;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 5px;

  @media (max-width: 660px) {
    display: none;
  }
`;

export const DivIcon = styled.div`
  width: 30%;
  height: 8vh;
  min-width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivMobile = styled.div`
  display: none;
  @media (max-width: 869px) {
    display: block;
    margin-right: 10px;
  }
`;

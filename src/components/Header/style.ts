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
`;

export const FieldSearch = styled.div`
  width: 38%;
  height: 8vh;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

export const DivIcon = styled.div`
  width: 30%;
  height: 8vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

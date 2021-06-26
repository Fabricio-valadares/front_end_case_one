import styled from "styled-components";

export const Container = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableStyled = styled.table`
  width: 100%;

  td:last-child {
    border-radius: 0 25px 25px 0;
  }

  td:first-child {
    border-radius: 25px 0 0 25px;
  }
`;

export const HeaderTable = styled.tr``;

export const Title = styled.th`
  padding: 55px 20px 15px 20px;
  text-align: center;
`;

export const LineTable = styled.tr`
  text-align: center;
  background-color: #fff;
  border-radius: 4px;

  border: 10px solid #f3f6f9;
`;

export const DataLine = styled.td`
  padding: 20px;
`;

export const DivMobile = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 660px) {
    overflow-x: auto;
  }
`;

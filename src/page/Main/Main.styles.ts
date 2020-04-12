import styled from "styled-components";
import { blue, grey } from "../../theme";

export const Container = styled.main`
  padding: 0 40px;
  @media (max-width: 750px) {
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  color: ${grey};
  @media (max-width: 750px) {
    display: unset;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  color: ${blue};
`;

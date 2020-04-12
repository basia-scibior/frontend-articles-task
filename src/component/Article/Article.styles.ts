import styled from "styled-components";
import { blue, grey, lightGrey } from "../../theme";

export const Container = styled.div`
  height: 150px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  color: ${blue};
`;

export const Date = styled.div`
  margin-left: 20px;
  color: ${lightGrey};
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 40px;
`;

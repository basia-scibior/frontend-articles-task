import styled from "styled-components";
import { blue, grey, lightGrey } from "../../theme";

export const Container = styled.article`
  min-height: 150px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 15% 85%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const Header = styled.header`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${blue};
`;

export const Date = styled.time`
  margin-left: 20px;
  color: ${lightGrey};
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-left: 40px;
`;

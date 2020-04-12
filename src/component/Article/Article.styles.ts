import styled from "styled-components";
import { blue, grey, lightGrey } from "../../theme";

export const Container = styled.article`
  min-height: 130px;
  margin-bottom: 30px;
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const Header = styled.header`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${blue};
  @media (max-width: 411px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const Date = styled.time`
  color: ${lightGrey};
  white-space: nowrap;
  @media (max-width: 411px) {
    font-size: 13px;
  }
`;

export const ArticleImage = styled.img`
  height: 130px;
  width: 130px;
  object-fit: cover;
  border-radius: 5px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 30px;
  @media (max-width: 411px) {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  flex-grow: 1;
`;

export const Preamble = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

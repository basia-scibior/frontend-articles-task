import styled from "styled-components";
import { grey, pink } from "../../theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Filters = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Filter = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${pink};
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

import styled from "styled-components";
import { blue, grey, pink } from "../../theme";

export const Container = styled.aside`
  padding-right: 20px;
`;

export const Title = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${blue};
`;

export const FiltersForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Filter = styled.label`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  color: ${pink};
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: rgba(0, 0, 60, 0.03);
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

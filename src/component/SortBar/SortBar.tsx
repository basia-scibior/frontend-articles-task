import { FC } from "react";
import * as React from "react";
import { Container } from "./SortBar.styles";

interface SortBarProps {
  onSort: () => void;
}

export const SortBar: FC<SortBarProps> = ({ onSort }) => {
  return (
    <Container>
      <div onClick={onSort}>Sort by date</div>
    </Container>
  );
};

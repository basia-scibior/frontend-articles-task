import { FC } from "react";
import * as React from "react";
import { Container, Icon, SortButton, SortText } from "./SortBar.styles";
import sortIcon from "../../images/sort-icon.svg";
import { SortDirection } from "../../models/SortDirection";

interface SortBarProps {
  onChangeDirection: (direction: SortDirection) => void;
  direction: SortDirection;
}

export const SortBar: FC<SortBarProps> = ({ onChangeDirection, direction }) => (
  <Container>
    <SortButton
      onClick={() => onChangeDirection(direction === "asc" ? "desc" : "asc")}
    >
      <SortText>Sort by date</SortText>
      <Icon src={sortIcon} direction={direction} />
    </SortButton>
  </Container>
);

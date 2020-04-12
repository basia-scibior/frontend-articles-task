import styled from "styled-components";
import { grey, pink } from "../../theme";
import { SortDirection } from "../../models/SortDirection";

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 750px) {
    height: 30px;
    position: absolute;
    right: 50px;
  }
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
  :hover {
    opacity: 0.7;
  }
`;

export const SortText = styled.div`
  color: ${pink};
`;

type IconProps = {
  direction: SortDirection;
};

export const Icon = styled.img`
  margin-left: 10px;
  opacity: 0.5;
  color: ${pink};
  transform: scaleY(
    ${({ direction }: IconProps) => (direction === "desc" ? 1 : -1)}
  );
`;

import * as React from "react";
import { FC } from "react";
import {
  Checkbox,
  Container,
  Filter,
  FiltersForm,
  Title,
} from "./Filters.styles";
import { Category } from "../../models/Category";
import useMultiSelect from "../../hooks/useMultiSelect";

interface FiltersProps {
  selectedCategories: Category[];
  onChangeSelectedCategories: (category: Category[]) => void;
}

export const Filters: FC<FiltersProps> = ({
  selectedCategories,
  onChangeSelectedCategories,
}) => {
  const { isSelected, toggle } = useMultiSelect(
    selectedCategories,
    onChangeSelectedCategories
  );
  return (
    <Container>
      <Title>Data sources</Title>
      <FiltersForm>
        <Filter>
          <Checkbox
            name="category"
            type="checkbox"
            checked={isSelected(Category.fashion)}
            onChange={() => toggle(Category.fashion)}
          />
          Fashion
        </Filter>
        <Filter>
          <Checkbox
            name="category"
            type="checkbox"
            checked={isSelected(Category.sport)}
            onChange={() => toggle(Category.sport)}
          />
          Sport
        </Filter>
      </FiltersForm>
    </Container>
  );
};

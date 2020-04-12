import * as React from "react";
import { FC } from "react";
import { Checkbox, Filter, Filters, Title } from "./Sidebar.styles";
import { Category } from "../../models/Category";

interface SidebarProps {
  selectedCategories: Category[];
  setSelectedCategories: (category: Category[]) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const isSelected = (category: Category) =>
    selectedCategories.includes(category);
  const select = (category: Category) =>
    setSelectedCategories([...selectedCategories, category]);
  const deselect = (category: Category) =>
    setSelectedCategories(
      selectedCategories.filter((aCategory) => aCategory !== category)
    );
  const toggle = (category: Category) =>
    isSelected(category) ? deselect(category) : select(category);
  return (
    <div>
      <Title>Data sources</Title>
      <Filters>
        <Filter>
          <Checkbox
            name="isGoing"
            type="checkbox"
            checked={isSelected(Category.fashion)}
            onChange={() => toggle(Category.fashion)}
          />
          Fashion
        </Filter>
        <Filter>
          <Checkbox
            name="isGoing"
            type="checkbox"
            checked={isSelected(Category.sport)}
            onChange={() => toggle(Category.sport)}
          />
          Sport
        </Filter>
      </Filters>
    </div>
  );
};

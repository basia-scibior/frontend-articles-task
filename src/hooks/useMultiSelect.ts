function useMultiSelect<T>(value: T[], onChange: (value: T[]) => void) {
  const isSelected = (item: T) => value.includes(item);
  const select = (item: T) => onChange([...value, item]);
  const deselect = (item: T) =>
    onChange(value.filter((aItem) => aItem !== item));
  const toggle = (item: T) =>
    isSelected(item) ? deselect(item) : select(item);

  return { isSelected, select, deselect, toggle };
}

export default useMultiSelect;

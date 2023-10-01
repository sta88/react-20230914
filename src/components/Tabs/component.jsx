import { Button } from "../Button/component";

export const Tabs = ({ arr, onChangeActive, activeItem }) => {
  return (
    <>
      {arr.map(({ name }, index) => (
        <Button title={name} onClick={() => onChangeActive(index)} disabled={index === activeItem} />
      ))}
    </>
  );
};

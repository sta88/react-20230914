import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Tabs = ({ arr, onChangeActive, activeItem }) => {
  return (
    <div className={styles.tabs}>
      {arr.map(({ id, name }, index) => (
        <Button  key={id}
                  title={name}
                  onClick={() => onChangeActive(index)}
                  disabled={index === activeItem}
                  className={'tabs-button'}
        />
      ))}
    </div>
  );
};

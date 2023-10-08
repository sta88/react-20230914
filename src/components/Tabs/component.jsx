import classNames from 'classnames';
import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Tabs = ({ arr, onChangeActive, activeItem, className }) => {
  return (
    <div className={classNames(className, styles.tabs)}>
      {arr.map(({ id, name }, index) => (
        <Button key={id}
                title={name}
                onClick={() => onChangeActive(index)}
                disabled={index === activeItem}
                variant={'tabs-button'}
        />
      ))}
    </div>
  );
};

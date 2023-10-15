import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Tabs = ({ arr, onChangeActive, activeItem, className }) => {
  const restaurants = useSelector((state) => state.restaurants.entities);

  return (
    <div className={classNames(className, styles.tabs)}>
      {arr.map((id, index) => (
        <Button key={id}
                title={restaurants[id].name}
                onClick={() => onChangeActive(index)}
                disabled={index === activeItem}
                variant={'tabs-button'}
        />
      ))}
    </div>
  );
};

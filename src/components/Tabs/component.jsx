import classNames from 'classnames';
import { RestaurantTabContainer } from '../RestaurantTab/container';

import styles from './styles.module.scss'

export const Tabs = ({ onChangeActive, activeId, className, restaurantIds }) => {
  return (
    <div className={classNames(className, styles.tabs)}>
      {restaurantIds.map(id => (
        <RestaurantTabContainer
          key={id}
          id={id}
          isActive={id === activeId}
          onClick={() => onChangeActive(id)}
          />
      ))}
    </div>
  );
};

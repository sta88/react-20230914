import classNames from 'classnames';
import { RestaurantTabContainer } from '../RestaurantTab/container';

import styles from './styles.module.scss'

export const Tabs = ({ onChangeActive, activeId, className, tabsData }) => {
  return (
    <div className={classNames(className, styles.tabs)}>
      {tabsData.map(item => (
        <RestaurantTabContainer
          key={item.id}
          restaurant={item}
          isActive={item.id === activeId}
          onClick={() => onChangeActive(item.id)}
          />
      ))}
    </div>
  );
};

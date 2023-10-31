import classNames from 'classnames';
import { Button } from '../Button/component';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export const TabsLinks = ({tabsData, className}) => {
  return (
    <div className={classNames(className, styles.tabs)}>
      {tabsData.map(({id, name}) => (
        <NavLink key={id} to={`restaurants/${id}`} className={({isActive}) => classNames({[styles.activeTab]: isActive})}>
            <Button variant={'tabs-button'}>
              {name}
            </Button>
        </NavLink>
      ))}
    </div>
  );
};

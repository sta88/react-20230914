import classNames from 'classnames';
import { Tab } from '../Tab/component';

import styles from './styles.module.scss'

export const Tabs = ({ tabs, onChangeActive, activeId, className }) => {

  return (
    <div className={classNames(className, styles.tabs)}>
      {tabs.map(id => (
        <Tab key={id} id={id} activeId={activeId} onClick={() => onChangeActive(id)} />
      ))}
    </div>
  );
};

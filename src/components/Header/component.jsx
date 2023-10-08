import classNames from 'classnames';

import styles from './styles.module.scss'

export const Header = ({ className }) => {
  return (
    <header className={classNames(className, styles.header)}>
      <h1 className={styles.title}>Restaurants</h1>
    </header>
  );
};
import classNames from 'classnames';
import { useContext } from 'react';
import { Button } from '../Button/component';
import { ThemeContext } from '../../contexts/Theme';

import styles from './styles.module.scss';

export const Header = ({ className }) => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header className={classNames(className, styles.header)}>
      <div className="wrapper">
        <h1 className={styles.title}>Restaurants</h1>
        <Button
          title="Theme"
          onClick={() => setTheme(theme === 'blue' ? 'purple' : 'blue')}
          variant={'theme-button'}
          className={styles.button}
        />
      </div>
    </header>
  );
};
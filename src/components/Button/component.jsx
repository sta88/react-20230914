import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

import styles from './styles.module.scss'

export const Button = ({ title, onClick, disabled, variant, className }) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button className={classNames(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: disabled
        },
        className,
        styles[theme]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

import classNames from 'classnames';
import styles from './styles.module.scss'

export const Button = ({ title, onClick, disabled, variant }) => {
  return (
    <button className={classNames(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: disabled
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

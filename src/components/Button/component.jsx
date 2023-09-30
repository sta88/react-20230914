import classNames from 'classnames';
import styles from './styles.module.scss'

export const Button = ({ title, onClick, disabled, className }) => {
  return (
    <button className={classNames(
        styles.button,
        styles[className],
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

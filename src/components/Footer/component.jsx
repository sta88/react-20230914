import classNames from 'classnames';

import styles from './styles.module.scss'

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
        <div className="wrapper">
            &copy;TS
        </div>
    </footer>
  );
};
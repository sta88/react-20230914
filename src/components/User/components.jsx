import classNames from 'classnames';

import styles from './styles.module.scss';

export const User = ({ user }) => {
  return (
        <div className={classNames(styles.user)}>{user.name}</div>
  );
};

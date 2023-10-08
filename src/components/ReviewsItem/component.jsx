import classNames from 'classnames';

import styles from './styles.module.scss'

export const ReviewsItem = ({ user, reviewText }) => {
  return (
    <>
        <div className={classNames(styles.user)}>{user}</div>
        <div className={classNames(styles.text)}>{reviewText}</div>
    </>
  );
};

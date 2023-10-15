import classNames from 'classnames';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss'

export const ReviewsItem = ({ userId, reviewText }) => {
  const users = useSelector((state) => state.users.entities);

  return (
    <>
        <div className={classNames(styles.user)}>{users[userId].name}</div>
        <div className={classNames(styles.text)}>{reviewText}</div>
    </>
  );
};

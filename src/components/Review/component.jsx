import classNames from 'classnames';

import styles from './styles.module.scss';
import { UserContainer } from '../User/container';

export const Review = ({ review }) => {
  return (
    <>
        <UserContainer userId={review.userId}/>
        <div className={classNames(styles.text)}>{review.text}</div>
    </>
  );
};

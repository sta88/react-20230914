import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectReviewById } from "../../redux/entities/reviews/selectors";
import { selectUserById } from "../../redux/entities/users/selectors";

import styles from './styles.module.scss'

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  if (!review || !user) {
    return null;
  }

  return (
    <>
        <div className={classNames(styles.user)}>{user.name}</div>
        <div className={classNames(styles.text)}>{review.text}</div>
    </>
  );
};

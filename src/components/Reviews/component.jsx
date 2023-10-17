import { useSelector } from 'react-redux';

import { Review } from '../Review/component';
import { AddReview } from '../AddReview/component';

import styles from './styles.module.scss'

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviewsIds.map((id) => (
          <li className={styles.item} key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
      <AddReview />
    </div>
  );
};

import { AddReview } from '../AddReview/component';
import { ReviewContainer } from '../Review/container';

import styles from './styles.module.scss'

export const Reviews = ({  reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviewsIds.map((id) => (
          <li className={styles.item} key={id}>
            <ReviewContainer reviewId={id} />
          </li>
        ))}
      </ul>
      <AddReview />
    </div>
  );
};

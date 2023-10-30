import { AddReview } from '../AddReview/component';
import { ReviewContainer } from '../Review/container';

import styles from './styles.module.scss'

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviews.map((item) => (
          <li className={styles.item} key={item.id}>
            <ReviewContainer review={item} />
          </li>
        ))}
      </ul>
      <AddReview restaurantId={restaurantId} />
    </div>
  );
};

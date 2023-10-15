import { useSelector } from 'react-redux';

import { ReviewsItem } from '../ReviewsItem/component';
import { AddReview } from '../AddReview/component';

import styles from './styles.module.scss'

export const Reviews = ({ reviews }) => {
  const reviewsEntities = useSelector((state) => state.reviews.entities);

  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviews.map((id) => (
          <li className={styles.item} key={id}>
            <ReviewsItem userId={reviewsEntities[id].userId} reviewText={reviewsEntities[id].text}/>
          </li>
        ))}
      </ul>
      <AddReview />
    </div>
  );
};

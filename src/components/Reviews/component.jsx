import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Button } from '../Button/component';
import { Modal } from '../Modal/component';
import { ReviewsItem } from '../ReviewsItem/component';

import styles from './styles.module.scss'

export const Reviews = ({ reviews }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviews.map(({ id, user, text }) => (
          <li className={styles.item} key={id}>
            <ReviewsItem user={user} reviewText={text}/>
          </li>
        ))}
      </ul>
      <Button
        title="Add review"
        onClick={() => setShowModal(true)}
        className={styles.button}
      />
      {showModal && createPortal(
        <Modal onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
};

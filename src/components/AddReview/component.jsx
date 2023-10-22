import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Button } from '../Button/component';
import { ReviewsFormModal } from '../ReviewsFormModal/component';

import styles from './styles.module.scss'

export const AddReview = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setShowModal(true)}
        className={styles.button}>
        Add review
      </Button>
      {showModal && createPortal(
        <ReviewsFormModal onSubmit={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
};

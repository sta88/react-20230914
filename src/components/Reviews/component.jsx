import styles from './styles.module.scss'

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul className={styles.reviews}>
        {reviews.map(({ id, user, text }) => (
          <li className={styles.item} key={id}>
            <div className={styles.user}>{user}</div>
            <div className={styles.text}>{text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

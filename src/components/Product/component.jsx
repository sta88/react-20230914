import classNames from 'classnames';
import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Product = ({ dish, className, onIncrement, onDecrement, amount }) => {
  return (
    <div className={classNames(styles.product, className)}>
      {dish.name}

      <div className={styles.controls}>
        <div className={styles.amount}>
          {amount}
        </div>
        <Button
          onClick={onDecrement}
          disabled={amount <= 0}
          variant={'left-button'}>
          -
        </Button>
        <div className={styles.separator}></div>
        <Button
          onClick={onIncrement}
          disabled={amount >= 5}
          variant={'right-button'}>
          +
        </Button>
      </div>
    </div>
  );
};
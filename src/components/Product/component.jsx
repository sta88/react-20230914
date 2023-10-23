import { useState } from "react";
import classNames from 'classnames';
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selectors";

import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Product = ({ dishId, className }) => {
  const [amount, setAmount] = useState(0);
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return (
    <div className={classNames(styles.product, className)}>
      {dish.name}

      <div className={styles.controls}>
        <div className={styles.amount}>
          {amount}
        </div>
        <Button
          title="-"
          onClick={() => setAmount(amount - 1)}
          disabled={amount === 0}
          variant={'left-button'}
        />
        <div className={styles.separator}></div>
        <Button
          title="+"
          onClick={() => setAmount(amount + 1)}
          disabled={amount === 5}
          variant={'right-button'}
        />
      </div>
    </div>
  );
};
import { useState } from "react";
import classNames from 'classnames';
import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Product = ({ name, className }) => {
  const [amount, setAmount] = useState(0);

  if (!name) {
    return null;
  }

  return (
    <div className={classNames(styles.product, className)}>
      {name}

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
import { useState } from "react";
import { Button } from "../Button/component";

import styles from './styles.module.scss'

export const Product = ({ name }) => {
  const [amount, setAmount] = useState(0);

  if (!name) {
    return null;
  }

  return (
    <div className={styles.product}>
      {name}

      <div className={styles.controls}>
        <div className={styles.amount}>
          {amount}
        </div>
        <Button
          title="-"
          onClick={() => setAmount(amount - 1)}
          disabled={amount === 0}
          className={'left-button'}
        />
        <div className={styles.separator}></div>
        <Button
          title="+"
          onClick={() => setAmount(amount + 1)}
          disabled={amount === 5}
          className={'right-button'}
        />
      </div>
    </div>
  );
};
import { ProductContainer } from "../Product/container";

import styles from './styles.module.scss'

export const Menu = ({ dishes, className }) => {
  return (
    <div className={className}>
      <h3>Menu</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <ProductContainer dishId={dish.id} className={styles.product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

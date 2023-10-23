import { ProductContainer } from "../Product/container";

import styles from './styles.module.scss'

export const Menu = ({ dishesIds, className }) => {
  return (
    <div className={className}>
      <h3>Menu</h3>
      <ul>
        {dishesIds.map((id) => (
          <li key={id}>
            <ProductContainer dishId={id} className={styles.product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { Product } from "../Product/component";

import styles from './styles.module.scss'

export const Menu = ({ data }) => {
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>
            <Product name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

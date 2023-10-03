import { Product } from "../Product/component";
import classNames from 'classnames';

import styles from './styles.module.scss'

export const Menu = ({ menu, className }) => {
  return (
    <div className={className}>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            <Product name={name} className={styles.product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

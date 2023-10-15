import { Product } from "../Product/component";
import { useSelector } from "react-redux";
import classNames from 'classnames';

import styles from './styles.module.scss'

export const Menu = ({ menu, className }) => {
  const dishes = useSelector((state) => state.dishes.entities);

  return (
    <div className={className}>
      <h3>Menu</h3>
      <ul>
        {menu.map((id) => (
          <li key={id}>
            <Product name={dishes[id].name} className={styles.product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

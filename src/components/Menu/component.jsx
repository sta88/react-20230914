import { Product } from "../Product/component";

export const Menu = ({ data }) => {
  return (
    <ul>
      {data.map(({ name }) => (
        <li>
          <Product name={name} />
        </li>
      ))}
    </ul>
  );
};

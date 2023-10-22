import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selectors";
import { Product } from "./component";

export const ProductContainer = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <Product dish={dish} className={className} />;
};
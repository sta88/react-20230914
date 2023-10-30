import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selectors";
import { Product } from "./component";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { useGetDishQuery } from "../../redux/services/api";

export const ProductContainer = ({ dishId, className }) => {
    const {data: dish} = useGetDishQuery(dishId);
    const amount = useSelector((state) => selectDishAmountById(state, dishId));
    const dispatch = useDispatch();

    if (!dish) {
        return null;
    }

    return (
        <Product
            dish={dish}
            className={className}
            onIncrement={() => dispatch(cartActions.increment(dishId))}
            onDecrement={() => dispatch(cartActions.decrement(dishId))}
            amount={amount}
        />
    );
};

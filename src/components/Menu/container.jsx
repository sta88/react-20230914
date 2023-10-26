import { useSelector } from "react-redux";
import { Menu } from "./component";
import { REQUEST_STATUS } from "../../constants/statuses";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { selectRestaurantMenuById } from "../../redux/entities/restaurants/selectors";
import { useRequest } from "../../hooks/use-request";

export const MenuContainer = ({restaurantId, className}) => {
  const restaurantDishesIds = useSelector(state => selectRestaurantMenuById(state, restaurantId));
  const dishesLoadingStatus = useRequest(getDishes, restaurantId);

  if (dishesLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  return <Menu dishesIds={restaurantDishesIds} className={className} />;
};

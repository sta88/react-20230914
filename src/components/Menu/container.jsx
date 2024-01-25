import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component";
import { REQUEST_STATUS } from "../../constants/statuses";
import { useEffect } from "react";
import { selectDishesLoadingStatus } from "../../redux/entities/dishes/selectors";
import { getDishes } from "../../redux/entities/dishes/thunks/get-dishes";
import { selectRestaurantMenuById } from "../../redux/entities/restaurants/selectors";

export const MenuContainer = ({restaurantId, className}) => {
  const restaurantDishesIds = useSelector(state => selectRestaurantMenuById(state, restaurantId));
  const loadingStatus = useSelector(selectDishesLoadingStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]);

  if (loadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  return <Menu dishesIds={restaurantDishesIds} className={className} />;
};

// Test commit
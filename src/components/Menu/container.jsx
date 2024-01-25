import { Menu } from "./component";
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuContainer = ({restaurantId, className}) => {
  const {data: restaurantDishes, isFetching} = useGetDishesQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <Menu dishes={restaurantDishes} className={className} />;
};

//test
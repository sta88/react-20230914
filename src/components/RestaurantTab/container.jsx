import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { Tab } from '../Tab/component';

export const RestaurantTabContainer = ({ id, ...props }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Tab {...props}>{restaurant.name}</Tab>
};

import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/selectors';
import { Tabs } from './component';

export const TabsContainer = (props) => {
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));

  return <Tabs {...props} restaurantIds={restaurantIds}/>;
};

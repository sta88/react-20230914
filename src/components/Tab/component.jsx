import { useSelector } from 'react-redux';
import { Button } from "../Button/component";
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';

export const Tab = ({ id, activeId, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Button key={id}
                title={restaurant.name}
                onClick={onClick}
                disabled={id === activeId}
                variant={'tabs-button'}
        />
};

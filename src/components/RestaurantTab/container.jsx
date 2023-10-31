import { Tab } from '../Tab/component';

export const RestaurantTabContainer = ({ restaurant, ...props }) => {
  return <Tab {...props}>{restaurant.name}</Tab>
};

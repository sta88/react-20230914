import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Tabs } from './component';

export const TabsContainer = (props) => {
  const {data: restaurants} = useGetRestaurantsQuery();

  if (!restaurants) {
    return null;
  }

  return <Tabs {...props} tabsData={restaurants}/>;
};

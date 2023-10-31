import { useGetRestaurantsQuery } from '../../redux/services/api';
import { TabsLinks } from './component';

export const TabsLinksContainer = (props) => {
  const {data: restaurants} = useGetRestaurantsQuery();

  if (!restaurants) {
    return null;
  }

  return <TabsLinks {...props} tabsData={restaurants}/>;
};

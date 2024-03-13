import React, {useEffect, useState} from "react";
import { ThemeProvider } from "../../contexts/Theme";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import { TabsContainer } from "../../components/Tabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { useGetRestaurantsQuery } from "../../redux/services/api";

import styles from './styles.module.scss'
import { Outlet } from "react-router-dom";
import { TabsLinksContainer } from "../../components/TabsLinks/container";

export const MainPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const [activeRestaurant, setActiveRestaurant] = useState();
  const {data: restaurants, isFetching, isSuccess} = useGetRestaurantsQuery();

  useEffect(() => {
    if (isSuccess && restaurants) {
      setActiveRestaurantId(restaurants[0].id);
      setActiveRestaurant(restaurants[0]);
    }
  }, [isSuccess, restaurants]);

  const changeActiveRestaurant = (id) => {
    setActiveRestaurantId(id);
    setActiveRestaurant(restaurants.filter(item => item.id === id)[0]);
  }

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header className={styles.header} />
        <div className="wrapper">
          {
            isFetching &&
            <div>Loading...</div>
          }
          {
            isSuccess && activeRestaurantId &&
            <>
              {/* <TabsContainer className={styles.tabs} onChangeActive={changeActiveRestaurant} activeId={activeRestaurantId}/> */}
              {/* <RestaurantContainer restaurant={activeRestaurant} /> */}
              <TabsLinksContainer className={styles.tabs}/>
              <Outlet />
            </>
          }
        </div>
        <Footer className={styles.footer} />
      </div>
    </ThemeProvider>
  );
};
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "../../contexts/Theme";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/get-restaurants";
import { TabsContainer } from "../../components/Tabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";

import styles from './styles.module.scss'

export const MainPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header className={styles.header} />
        <div className="wrapper">
          <TabsContainer className={styles.tabs} onChangeActive={setActiveRestaurantId} activeId={activeRestaurantId} />
          <RestaurantContainer restaurantId={activeRestaurantId} />
        </div>
        <Footer className={styles.footer} />
      </div>
    </ThemeProvider>
  );
};
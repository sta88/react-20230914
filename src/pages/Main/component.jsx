import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "../../contexts/Theme";

import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import styles from './styles.module.scss'

export const MainPage = () => {
  const restaurantsIds = useSelector((state) => state.restaurants.ids);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

  if (!restaurantsIds?.length) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header className={styles.header} />
        <div className="wrapper">
          <Tabs tabs={restaurantsIds} className={styles.tabs} onChangeActive={(i) => setActiveRestaurantId(i)} activeId={activeRestaurantId} />
          <Restaurant restaurantId={activeRestaurantId} />
        </div>
        <Footer className={styles.footer} />
      </div>
    </ThemeProvider>
  );
};
import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "../../contexts/Theme";

import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import styles from './styles.module.scss'

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const restaurantsIds = useSelector((state) => state.restaurants.ids);

  if (!restaurantsIds?.length) {
    return null;
  }

  return (
    <ThemeProvider>
      <div class={styles.container}>
        <Header className={styles.header} />
        <div className="wrapper">
          <Tabs arr={restaurantsIds} className={styles.tabs} onChangeActive={(i) => setActiveRestaurantIndex(i)} activeItem={activeRestaurantIndex} />
          <Restaurant restaurantsIds={restaurantsIds} activeIndex={activeRestaurantIndex} />
        </div>
        <Footer className={styles.footer} />
      </div>
    </ThemeProvider>
  );
};
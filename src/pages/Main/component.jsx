import React, {useState} from "react";
import { restaurants } from "../../constants/mock";

import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";

import styles from './styles.module.scss'

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div class={styles.container}>
      <Header />
      <div className="wrapper">
        <Tabs arr={restaurants} onChangeActive={(i) => setActiveRestaurantIndex(i)} activeItem={activeRestaurantIndex} />
        <Restaurant restaurants={restaurants} activeIndex={activeRestaurantIndex} />
      </div>
      <Footer />
    </div>
  );
};
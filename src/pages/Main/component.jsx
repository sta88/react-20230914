import React, {useState} from "react";
import { restaurants } from "../../constants/mock";

import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <Tabs arr={restaurants} onChangeActive={(i) => setActiveRestaurantIndex(i)} activeItem={activeRestaurantIndex} />
      <br /><br />

      <Restaurant restaurants={restaurants} activeIndex={activeRestaurantIndex} />
    </div>
  );
};
import React, {useState} from "react";
import { restaurants } from "../../constants/mock";

import { Menu } from "../../components/Menu/component";
import { Tabs } from "../../components/Tabs/component";
import { Reviews } from "../../components/Reviews/component";

export const MainPage = () => {
  const [activeRest, setActiveRest] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <Tabs arr={restaurants} onChangeActive={(i) => setActiveRest(i)} activeItem={activeRest} />
      <br /><br />

      <h1>{restaurants[activeRest].name}</h1>

      <Menu data={restaurants[activeRest].menu} />
      <Reviews data={restaurants[activeRest].reviews} />
    </div>
  );
};